/* SELECT A MONSTER NAME, ID, AND ONE CHARACTERISTIC AND ORDER BY ID */

SELECT DISTINCT
  id,
  name,
  SPLIT_PART (characteristics, ',', 1) as characteristic
FROM monsters
ORDER BY id;
