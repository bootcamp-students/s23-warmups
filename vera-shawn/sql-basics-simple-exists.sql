-- Create your SELECT statement here
SELECT id, name
FROM departments
WHERE EXISTS (
  SELECT price 
  FROM sales 
  WHERE sales.department_id = departments.id 
  AND sales.price > 98
);