const API_URL = "http://localhost:8080/api/students";

export async function fetchStudents() {
	const response = await fetch(API_URL);

	if (!response.ok) {
		throw new Error(`Failed to fetch students: ${response.status}`);
	}

	return response.json();
}
