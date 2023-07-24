-- use || ' ' || to concat columns
-- only return prefix, first, last, suffix
SELECT prefix || ' ' || first|| ' ' || last|| ' ' || suffix AS title FROM names;
