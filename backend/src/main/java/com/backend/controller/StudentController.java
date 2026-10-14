package com.backend.controller;

import com.backend.dto.StudentFeeResponse;
import com.backend.service.StudentService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController {

	private final StudentService studentService;

	public StudentController(StudentService studentService) {
		this.studentService = studentService;
	}

	@GetMapping
	public List<StudentFeeResponse> getAllStudents() {
		return studentService.getAllStudents();
	}
}
