SELECT id, name, split_part(characteristics, ',', 1) AS characteristic
FROM Monsters
ORDER BY id;
