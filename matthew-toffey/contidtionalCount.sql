-- Replace with your SQL Query
SELECT EXTRACT(MONTH FROM payment_date)              AS month,
       COUNT(amount)                                 AS total_count,
       SUM(amount)                                   AS total_amount,
       COUNT(CASE WHEN staff_id = 1 THEN amount END) AS mike_count,
       SUM(CASE WHEN staff_id = 1 THEN amount END)   AS mike_amount,
       COUNT(CASE WHEN staff_id = 2 THEN amount END) AS jon_count,
       SUM(CASE WHEN staff_id = 2 THEN amount END)   AS jon_amount
FROM payment
GROUP BY month
ORDER BY month;
--BEGIN
--GIVEN two tables
--must compare them by month
--use variables stated in instructions
