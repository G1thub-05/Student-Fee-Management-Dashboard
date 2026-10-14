import SummaryCard from "./SummaryCard";
import { formatMoney } from "../utils/feeUtils";
import "../styl/DashboardCards.css";
export default function DashboardCards({ summary }) {
	return (
		<section className="summary-grid">
			<SummaryCard
				title="Total Students"
				value={summary.totalStudents}
				type="students-card"
			/>

			<SummaryCard
				title="Total Fees"
				value={formatMoney(summary.totalFees)}
				type="fees-card"
			/>

			<SummaryCard
				title="Amount Collected"
				value={formatMoney(summary.totalCollected)}
				type="collected-card"
			/>

			<SummaryCard
				title="Pending Fees"
				value={formatMoney(summary.totalPending)}
				type="pending-card"
			/>
		</section>
	);
}
