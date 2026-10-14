import "../styl/StudentFilters.css";
export default function StudentFilters({
	search,
	setSearch,
	pendingOnly,
	setPendingOnly,
	sortOrder,
	setSortOrder,
}) {
	return (
		<div className="toolbar">
			<input
				className="search-input"
				type="search"
				placeholder="Search student name..."
				value={search}
				onChange={(event) => setSearch(event.target.value)}
			/>

			<label className="filter-label">
				<input
					type="checkbox"
					checked={pendingOnly}
					onChange={(event) => setPendingOnly(event.target.checked)}
				/>
				Pending only
			</label>

			<select
				className="sort-select"
				value={sortOrder}
				onChange={(event) => setSortOrder(event.target.value)}
				aria-label="Sort by pending amount"
			>
				<option value="none">Default order</option>
				<option value="high">Highest pending first</option>
				<option value="low">Lowest pending first</option>
			</select>
		</div>
	);
}
