SELECT * FROM departments
WHERE EXISTS (SELECT * FROM sales WHERE sales.department_id = departments.id AND price >= 98)
