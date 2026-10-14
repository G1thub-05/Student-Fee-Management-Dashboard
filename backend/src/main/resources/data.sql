CREATE DATABASE IF NOT EXISTS student_fee_db;
USE student_fee_db;
INSERT INTO students (id, name, class_name, total_fee)
VALUES
    (1, 'Digeshwar', '12', 6000),
    (2, 'Priya Verma', '9', 4000),
    (3, 'Rahul Patel', '10', 6000),
    (4, 'Neha Singh', '8', 3000),
    (5, 'Rohan Das', '9', 5500),
    (6, 'Aman Sharma', '10', 5000);

INSERT INTO payments (student_id, amount, payment_date)
VALUES
    (1, 6000, CURRENT_DATE),
    (2, 4000, CURRENT_DATE),
    (3, 2500, CURRENT_DATE),
    (5, 2000, CURRENT_DATE),
    (6, 3000, CURRENT_DATE);
