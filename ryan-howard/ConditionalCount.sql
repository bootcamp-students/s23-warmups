SELECT
  EXTRACT(MONTH FROM payment_date) AS month,
  COUNT(payment_id) AS total_count,
  SUM(amount) AS total_amount,
  SUM(CASE WHEN staff_id = 1 THEN 1 ELSE 0 END) AS mike_count,
  SUM(CASE WHEN staff_id = 1 THEN amount ELSE 0 END) AS mike_amount,
  SUM(CASE WHEN staff_id = 2 THEN 1 ELSE 0 END) AS jon_count,
  SUM(CASE WHEN staff_id = 2 THEN amount ELSE 0 END) AS jon_amount
FROM payment
GROUP BY month
ORDER BY month
