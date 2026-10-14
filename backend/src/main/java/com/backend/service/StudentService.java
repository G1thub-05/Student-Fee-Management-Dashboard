package com.backend.service;




import com.backend.dto.StudentFeeResponse;
import com.backend.entity.Student;
import com.backend.repository.PaymentRepository;
import com.backend.repository.StudentRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;

@Service
public class StudentService {

	private final StudentRepository studentRepository;
	private final PaymentRepository paymentRepository;

	public StudentService(
			StudentRepository studentRepository,
			PaymentRepository paymentRepository) {
		this.studentRepository = studentRepository;
		this.paymentRepository = paymentRepository;
	}

	@Transactional(readOnly = true)
	public List<StudentFeeResponse> getAllStudents() {
		return studentRepository.findAll()
				.stream()
				.map(this::toResponse)
				.toList();
	}

	private StudentFeeResponse toResponse(Student student) {
		BigDecimal paid = paymentRepository
				.findTotalPaidByStudentId(student.getId())
				.orElse(BigDecimal.ZERO);

		BigDecimal pending = student.getTotalFee().subtract(paid);

		return new StudentFeeResponse(
				student.getId(),
				student.getName(),
				student.getClassName(),
				student.getTotalFee(),
				paid,
				pending
		);
	}
}
