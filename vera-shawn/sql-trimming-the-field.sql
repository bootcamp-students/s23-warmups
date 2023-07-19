/*  SQL  */
SELECT id, name, SPLIT_PART(characteristics, ',',1) as characteristic
FROM monsters
ORDER BY id
LIMIT 5;