import "../styl/StatusBadge.css";
export default function StatusBadge({ pending }) {
	const isPaid = pending === 0;

	return (
		<span className={`badge ${isPaid ? "paid" : "pending"}`}>
			{isPaid ? "Fully Paid" : "Pending"}
		</span>
	);
}
