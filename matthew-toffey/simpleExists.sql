-- Create your SELECT statement here
--BEGIN
--GIVEN table of tansactional data
--must return a list of transactions reater than or equal to 98.00
--END
SELECT * 
FROM departments d
WHERE EXISTS (SELECT 1 FROM sales s WHERE s.price>98 and s.department_id=d.id);
