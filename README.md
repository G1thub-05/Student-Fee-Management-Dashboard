## **🎓 Project Overview**

<p align="justify">
A responsive web application for displaying and managing student fee information. The dashboard helps track total fees, collected payments, pending amounts, and individual student payment status. This project is developed as part of the Web Developer Take-Home Technical Assignment. The Student Fee Management Dashboard provides a simple interface to monitor student fee records and summarize payment information. The application focuses on reusable React components, clear fee calculations, responsive design, error handling, and database fundamentals.
</p>

<div align="center">
<a href="https://student-fee-management-dashboard.vercel.app/">
  <img src="https://img.shields.io/badge/🌐%20Live%20Website-Visit-0072ff?style=for-the-badge" alt="Live Demo"/>
</a>
</div>

## **✨ Features**

- Dashboard Summary: Total students, total fees, total collected amount, and total pending fees.
- Student Table: Student ID, name, class, total fee, paid amount, and pending amount.
- Search: Find students by name.
- Pending Fee Filter: Display only students with pending fees.
- Sorting: Sort students by pending amount.
- Payment Status: Visually distinguish fully paid and pending fees.
- Responsive Design: Support desktop and mobile screens.
- Reusable Components: Separate dashboard, table, row, and status components.
- Fee Utilities: Keep calculations and formatting separate from presentation.
- Backend Integration: Spring Boot API and MySQL database, where configured.

## **🧰 Technologies Used**

The structure separates frontend components, API communication, styling, utilities, backend code, and SQL documentation. The tree is illustrative; retain the actual files and folders present in the repository.

```text
1.  HTML5               - Application structure
2.  CSS3                - Styling and responsive layout
3.  JavaScript (ES6+)   - Calculations and application logic
4.  React               - Component-based UI
5.  Vite                - Frontend development and build tooling
6.  Java                - Backend development
7.  Spring Boot         - REST API
8.  pring Data JPA      - Database access
9.  MySQL               - Relational database
10. Git and GitHub      - Version control and source code hosting
```

## **📂 Project Structure**

The project is organized into separate frontend and backend applications to maintain a clear separation of responsibilities.

```text
student-fee-dashboard/
│
├── frontend/                      # React + Vite frontend
│   ├── public/
│   │   └── favicon.svg
│   ├── src/
│   │   ├── api/                   # API calls to the backend
│   │   ├── components/            # Reusable React components
│   │   ├── database/              # Frontend database-related files, if any
│   │   ├── styl/                  # CSS and styling files
│   │   ├── utils/                 # Helper functions and calculations
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .gitignore
│   ├── .oxlintrc.json
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js

```
```text
├── backend/                         # Spring Boot backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/
│   │   │   │        └── backend
│   │   │   │              └── ...            # Controllers, services, repositories, entities, dto
│   │   │   └── resources/
│   │   │          ├── data.sql
│   │   │          └── application.properties
│   │   └── test/
│   ├── .gitignore
│   └── pom.xml
│
└── README.md
```

### Folder Responsibilities

- **Frontend:** Provides the user interface, dashboard, student table, search, filters, and fee summaries.
- **Backend:** Handles REST APIs, business logic, database operations, and communication with MySQL.
- **Database:** Contains SQL scripts for creating tables and running required queries.
- **README.md:** Documents the project, setup instructions, execution steps, and design decisions.
- **.gitignore:** Excludes generated files, build output, dependencies, and sensitive configuration files from Git.

**Note:** This is an illustrative structure. Keep only the folders and files that actually exist in your project; you do not need to create every item shown above.

## **🔌 Frontend and Backend Communication**

<p align="justify">
The React frontend communicates with the Spring Boot backend through HTTP requests. The API service should contain the request logic, while React components should focus on displaying the returned data. The frontend API URL must match the endpoint implemented by the backend. Configure CORS on the backend if the frontend and backend use different origins. API error handling should account for failed requests and unavailable backend services.
<p/>

## **📋 Prerequisites**

Install the following tools:

- Node.js and npm
- Java Development Kit (JDK)
- Maven, or the project's Maven Wrapper for dependency management
- MySQL Server for store the data
- Git for version control or cloning project (optional)
- Visual Studio Code for frontend or another suitable code editor
- Idea Intellij for backend or another suitable IDE editor

## **⚙️ Setup Instructions (How to Run the Application Locally)**

```text
Step - 1: Open Repository → <Student-Fee-Management-Dashboard-Repo-Link>

  - Option 1: Download ZIP 📦 →  Click on the <>Code button → Select Download ZIP → Extract the ZIP file
  - Option 2: Clone Repository → Open a terminal and run: git clone <Student-Fee-Management-Dashboard-Repo-Link>
  - Navigate to the project root: cd student-fee-dashboard
```

```text
Step - 2: MySQL Database Setup

- Open MySQL Workbench or MySQL Command Line and create the database: CREATE DATABASE student_fee_db;
- Configure the database URL, username, and password in the backend/src/main/resources/application.properties file.
- Verify that database configuration matches backend entities and repository classes and after that ensure that MySQL Server is running.
```

```text
Step - 3: Spring Boot Backend Setup

- 📂 Navigate to the backend root directory: cd backend
- 📄 Create .env file inside root directory → backend/.env
- ⚙️ Setup your .env file → Setup Instruction is given below
- ⚙️ Install dependencies and build the project: mvn clean install
- 🚀 Start the Spring Boot backend: mvn spring-boot:run
- 📄 Keep the backend terminal running.
```

```text
Spring boot backend .env Setup

- DB_URL=jdbc:mysql://localhost:3306/student_fee_db
- DB_USERNAME=<YOUR_DB_USERNAME>
- DB_PASSWORD=<YOUR_DB_PASSWORD>
- SERVER_PORT=8080
```

```text
Step - 4: React Frontend Setup

- 📂 Open a new terminal and navigate to the frontend root directory: cd frontend
- ⚙️ Install frontend dependencies: npm install
- 🚀 Start the Vite development server: npm run dev
- 🚀 Open the local URL displayed in the terminal. Default URL: http://localhost:5173
```

```text
Step - 5: Verify Application Features

- Check the total number of students and also verify total fees, collected fees, and pending fees.
- Search students by name, filter students with pending fees and sort students by pending amount.
- Check payment status indicators test the responsive layout on desktop and mobile.
- Verify API-based data loading when the backend is configured.
```

## **📝 Important Notes**

```text
- Run MySQL, the backend, and the frontend as required.
- Start the backend and frontend in separate terminals.
- Ensure the frontend API URL matches the backend endpoint.
- Configure CORS if frontend and backend run on different origins.
- Never commit database passwords or other secrets to GitHub.
- The backend port and API endpoints depend on the project configuration.
```

## **📝 Assumptions and Known Limitations**
```text
- Fee calculations assume valid, non-negative monetary amounts.
- Overpayments require an explicit business rule.
- Students may make payments in multiple installments.
- Dashboard totals must be derived from the selected data source.
- API-based functionality requires the backend and database to be available.
- Search, filtering, and sorting operate on the student records available to the frontend.
- Authentication, authorization, and production-grade payment processing are not claimed unless implemented.
- Deployment-specific configuration must be supplied separately.
```

## **📝 Answers or explanations for the SQL and logic questions.**

##### **1. How to Handle Paid Amount Exceeding Total Fee**

```text
If the paid amount exceeds the total fee, I would validate the payment data before calculating the pending fee.

- Validation: Check whether the paid amount is greater than the total fee.
- Prevent Invalid Data: If overpayments are not allowed, reject the invalid amount and display an appropriate error message.
- Handle Overpayments: If overpayments are allowed, record the excess amount separately as a credit or refund instead of treating it as a negative pending fee.
- Accurate Calculation: Calculate the pending fee only after validating the amounts.

For example, if the total fee is ₹5,000 and the paid amount is ₹6,000, the excess payment is ₹1,000. The application should flag this condition and handle the excess according to the defined business rules. This approach prevents incorrect fee calculations and maintains data consistency.
```

##### **2. Explain how your design would support multiple payments by the same student.**

```text
The database uses a one-to-many relationship between Students and Payments.

- Each student has a unique record in the Students table.
- Every payment has its own unique payment ID.
- The student_id foreign key connects each payment to its student.
- Multiple payment records can reference the same student.
- The total amount paid is calculated by summing all valid payment records once.
- Each installment is stored as a separate payment record without overwriting previous payments.

For example, if a student's total fee is ₹5,000 and they pay ₹2,000 and ₹1,500 in two installments, the database stores two separate payment records. The total paid is ₹3,500, and the pending fee is ₹1,500.
```

**Why This Design?**
```text
- Primary keys: Uniquely identify students and payment records.
- Foreign keys: Maintain referential integrity between students and payments.
- Separate payment records: Support multiple installments without overwriting - payment history.
- DECIMAL data type: Provides appropriate precision for monetary values.
- Aggregation queries: Calculate total collected amounts and individual student balances.

This schema separates student information from payment transactions and supports accurate fee tracking, payment history, and reporting.
```

##### **3. INNER JOIN vs LEFT JOIN**
```text
- NNER JOIN: Returns only records that have matching rows in both tables.
- LEFT JOIN: Returns every row from the left table, including rows with no match in the right table. Missing right-side values are NULL.
- A LEFT JOIN is useful for showing students who have not made any payments.
```

##### **4. Why is a foreign key useful?**

```text
A foreign key maintains referential integrity between related tables. For example, Payments.student_id references Students.id, preventing payment records from referencing nonexistent students when the constraint is enforced.

- Maintains data integrity: Prevents payments from referencing students who do not exist.
- Establishes relationships: Connects each payment to the corresponding student.
- Prevents invalid records: Rejects payment records containing a non-existent student_id.
- Supports accurate reporting: Allows payment totals and student fee balances to be calculated using reliable relationships between tables.

For example, if student ID 10 does not exist in the Students table, the database will reject a payment record referencing student_id = 10. Thus, a foreign key helps maintain consistent and reliable student payment data.
```
