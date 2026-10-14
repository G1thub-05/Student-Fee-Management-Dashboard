package com.backend.entity;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity @Table(name = "students") public class Student {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
	@Column(nullable = false) private String name;
	@Column(name = "class_name", nullable = false) private String className;
	@Column(name = "total_fee", nullable = false) private BigDecimal totalFee;

	public Long getId() {
		return id;
	}
	public String getName() {
		return name;
	}
	public String getClassName() {
		return className;
	}
	public BigDecimal getTotalFee() {
		return totalFee;
	}
}
