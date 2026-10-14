import "../styl/SummaryCard.css";
export default function SummaryCard({ title, value, type }) {
	return (
		<article className={`summary-card ${type || ""}`}>
			<p>{title}</p>
			<h2>{value}</h2>
		</article>
	);
}
