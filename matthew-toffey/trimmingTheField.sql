/*  SQL  */
SELECT id,
       name,
       split_part(characteristics,',',1) as characteristic --takes the characteristics table and splits at the comma, then returning the information held before the comma
FROM monsters
ORDER BY id;
--BEGIN
--given table that needs trimmed
--only diplay one characteristic
--return table with new format
--END
