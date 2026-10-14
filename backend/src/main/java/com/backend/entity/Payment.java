package com.backend.entity;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity @Table(name = "payments") public class Payment {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
	@ManyToOne(fetch = FetchType.LAZY, optional = false) @JoinColumn(name = "student_id", nullable = false)
	private Student student;
	@Column(nullable = false, precision = 10, scale = 2) private BigDecimal amount;
	@Column(name = "payment_date", nullable = false) private LocalDate paymentDate;

	public Long getId() {
		return id;
	}

	public Student getStudent() {
		return student;
	}
	public BigDecimal getAmount() {
		return amount;
	}
	public LocalDate getPaymentDate() {
		return paymentDate;
	}
}
