export function formatMoney(amount) {
	return new Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "INR",
		maximumFractionDigits: 0,
	}).format(amount);
}

export function calculatePending(totalFee, paid) {
	if (totalFee < 0 || paid < 0) {
		throw new Error("Fee amounts cannot be negative");
	}

	if (paid > totalFee) {
		throw new Error("Paid amount cannot exceed total fee");
	}

	return totalFee - paid;
}

export function getPendingStudents(students) {
	return students.filter(
		(student) => calculatePending(student.totalFee, student.paid) > 0,
	);
}

export function getHighestPendingStudents(students) {
	const pendingStudents = students.map((student) => ({
		...student,
		pending: calculatePending(student.totalFee, student.paid),
	}));

	const highestPending = Math.max(
		0,
		...pendingStudents.map((student) => student.pending),
	);

	return pendingStudents.filter(
		(student) => highestPending > 0 && student.pending === highestPending,
	);
}

export function getFeeSummary(students) {
	return students.reduce(
		(summary, student) => {
			summary.totalFees += student.totalFee;
			summary.totalCollected += student.paid;
			summary.totalPending += calculatePending(student.totalFee, student.paid);

			return summary;
		},
		{
			totalStudents: students.length,
			totalFees: 0,
			totalCollected: 0,
			totalPending: 0,
		},
	);
}
