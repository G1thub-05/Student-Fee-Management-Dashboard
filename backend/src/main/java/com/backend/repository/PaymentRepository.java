package com.backend.repository;


import com.backend.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.util.Optional;

public interface PaymentRepository extends JpaRepository<Payment, Long> {

	@Query("""
			    SELECT SUM(p.amount)
			    FROM Payment p
			    WHERE p.student.id = :studentId
			""") Optional<BigDecimal> findTotalPaidByStudentId(@Param("studentId") Long studentId);
}
