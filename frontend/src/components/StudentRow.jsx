import "../styl/StudentRow.css";
import { formatMoney } from "../utils/feeUtils";
import StatusBadge from "./StatusBadge";

export default function StudentRow({ student }) {
	return (
		<tr>
			<td>
				<div className="student-name">{student.name}</div>
				<small className="student-id">Student ID: {student.id}</small>
			</td>
			<td>
				<span className="class-badge">Class {student.className}</span>
			</td>
			<td>{formatMoney(student.totalFee)}</td>
			<td className="paid-amount">{formatMoney(student.paid)}</td>
			<td className="pending-amount">{formatMoney(student.pending)}</td>

			<td>
				<StatusBadge pending={student.pending} />
			</td>
		</tr>
	);
}
