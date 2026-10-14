import "./styl/App.css";
import { useEffect, useMemo, useState } from "react";
import { students as localStudents } from "./data/students";
import { fetchStudents } from "./api/studentService";
import { getFeeSummary } from "./utils/feeUtils";
import DashboardHeader from "./components/DashboardHeader";
import StudentFilters from "./components/StudentFilters";
import StudentTable from "./components/StudentTable";
import DashboardCards from "./components/DashboardCards";

// import "./styl/index.css";

// Change only this value: "local" or "api"
const DATA_SOURCE = "local";

export default function App() {
	const [search, setSearch] = useState("");
	const [pendingOnly, setPendingOnly] = useState(false);
	const [sortOrder, setSortOrder] = useState("none");

	const [students, setStudents] = useState(
		DATA_SOURCE === "local" ? localStudents : [],
	);
	const [loading, setLoading] = useState(DATA_SOURCE === "api");
	const [error, setError] = useState("");

	// Fetch students from Spring Boot backend
	useEffect(() => {
		// Local mode: use imported dummy data
		if (DATA_SOURCE === "local") {
			setStudents(localStudents);
			setLoading(false);
			setError("");
			return;
		}

		// API mode: fetch data from Spring Boot
		let active = true;
		async function loadStudents() {
			try {
				setLoading(true);
				setError("");
				const data = await fetchStudents();
				if (active) {
					setStudents(data);
				}
			} catch (err) {
				if (active) {
					setError(err.message || "Unable to load students.");
				}
			} finally {
				if (active) {
					setLoading(false);
				}
			}
		}

		loadStudents();

		return () => {
			active = false;
		};
	}, []);

	// Calculate dashboard summary
	const summary = useMemo(() => getFeeSummary(students), [students]);

	// Search, filter and sort students
	const filteredStudents = useMemo(() => {
		const result = students
			.filter((student) =>
				student.name.toLowerCase().includes(search.trim().toLowerCase()),
			)
			.filter((student) => !pendingOnly || student.paid < student.totalFee)
			.map((student) => ({
				...student,
				pending: student.totalFee - student.paid,
			}));

		if (sortOrder === "high") {
			result.sort((a, b) => b.pending - a.pending);
		} else if (sortOrder === "low") {
			result.sort((a, b) => a.pending - b.pending);
		}

		return result;
	}, [students, search, pendingOnly, sortOrder]);

	function resetFilters() {
		setSearch("");
		setPendingOnly(false);
		setSortOrder("none");
	}

	if (loading) {
		return (
			<main className="container">
				<p>Loading students...</p>
			</main>
		);
	}

	if (error) {
		return (
			<main className="container">
				<p role="alert">Error: {error}</p>
				<button onClick={() => window.location.reload()}>Retry</button>
			</main>
		);
	}

	return (
		<main className="container">
			<DashboardHeader />
			<DashboardCards summary={summary} />

			<StudentFilters
				search={search}
				setSearch={setSearch}
				pendingOnly={pendingOnly}
				setPendingOnly={setPendingOnly}
				sortOrder={sortOrder}
				setSortOrder={setSortOrder}
			/>

			<StudentTable
				students={filteredStudents}
				totalStudents={students.length}
				onReset={resetFilters}
			/>

			<footer className="app-footer">
				<span>Student Fee Management Dashboard</span>
				<span>Built with React</span>
			</footer>
		</main>
	);
}
