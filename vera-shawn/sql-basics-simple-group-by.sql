-- Create your SELECT statement here
SELECT age, COUNT(age) as people_count
FROM people
GROUP BY age;