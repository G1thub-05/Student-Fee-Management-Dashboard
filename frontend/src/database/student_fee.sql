
CREATE TABLE Students (
    id INTEGER PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    class VARCHAR(20) NOT NULL,
    total_fee DECIMAL(10, 2) NOT NULL
        CHECK (total_fee >= 0)
);

CREATE TABLE Payments (
    id INTEGER PRIMARY KEY,
    student_id INTEGER NOT NULL,
    amount DECIMAL(10, 2) NOT NULL
        CHECK (amount > 0),
    payment_date DATE NOT NULL,
    FOREIGN KEY (student_id) REFERENCES Students(id)
);

-- 1. Retrieve all students
SELECT * FROM Students;

-- 2. Retrieve all payments made by a particular student.
SELECT *
FROM Payments
WHERE student_id = 1;

-- 3. Calculate the total amount paid by each student.
SELECT student_id, SUM(amount) AS total_paid
FROM Payments
GROUP BY student_id;

-- 4. All students, including those with no payments
SELECT
    s.id,
    s.name,
    s.class,
    COALESCE(SUM(p.amount), 0) AS total_paid
FROM Students s
LEFT JOIN Payments p ON p.student_id = s.id
GROUP BY s.id, s.name, s.class;

-- 5. Students whose total payments exceed 5000
SELECT
    s.id,
    s.name,
    SUM(p.amount) AS total_paid
FROM Students s
JOIN Payments p ON p.student_id = s.id
GROUP BY s.id, s.name
HAVING SUM(p.amount) > 5000;

-- 6. Total collection during a given month
SELECT COALESCE(SUM(amount), 0) AS monthly_collection
FROM Payments
WHERE payment_date >= DATE '2026-09-01'
  AND payment_date < DATE '2026-10-01';
