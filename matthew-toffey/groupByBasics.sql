-- Create your SELECT statement here
--BEGIN
--GIVEN table of people 
--must return table as groups of people with the same age
--count of the poeple with the same age as well
--END

SELECT age, count(age) as people_count
FROM people
GROUP BY age;

--NOTES, could not maintain full table but rather use count to include new table column based on stated params
