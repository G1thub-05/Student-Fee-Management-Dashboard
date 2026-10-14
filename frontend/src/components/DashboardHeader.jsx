import "../styl/DashboardHeader.css";
export default function DashboardHeader() {
	return (
		<header className="page-header">
			<div className="brand-icon">SF</div>

			<div className="header-content">
				<p className="eyebrow">SCHOOL MANAGEMENT SYSTEM</p>
				<h1>Student Fee Dashboard</h1>
				<p className="subtitle">
					Track fee collections and outstanding student payments.
				</p>
			</div>
		</header>
	);
}
