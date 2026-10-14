package com.backend.dto;

import java.math.BigDecimal;
public record StudentFeeResponse(
		Long id,
		String name,
		String className,
		BigDecimal totalFee,
		BigDecimal paid,
		BigDecimal pending
) {}
