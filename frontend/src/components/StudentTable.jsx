import StudentRow from "./StudentRow";
import "../styl/StudentTable.css";
export default function StudentTable({ students, totalStudents, onReset }) {
	return (
		<section className="table-card">
			<div className="table-heading">
				<div>
					<h2>Student Payments</h2>
					<p>View and manage student fee status.</p>
				</div>

				<span className="student-count">{students.length} students</span>
			</div>

			<div className="table-scroll">
				<table>
					<thead>
						<tr>
							<th>Student</th>
							<th>Class</th>
							<th>Total Fee</th>
							<th>Paid Amount</th>
							<th>Pending Amount</th>
							<th>Payment Status</th>
						</tr>
					</thead>

					<tbody>
						{students.map((student) => (
							<StudentRow key={student.id} student={student} />
						))}

						{students.length === 0 && (
							<tr>
								<td colSpan="6" className="empty-state">
									<div className="empty-icon">?</div>
									<strong>No students found</strong>
									<p>Try another name or change your filters.</p>

									<button className="reset-button" onClick={onReset}>
										Reset filters
									</button>
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>

			<footer className="table-footer">
				Showing {students.length} of {totalStudents} students
			</footer>
		</section>
	);
}
