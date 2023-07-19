/*  SQL  */
UPDATE monsters
  SET name = CONCAT(name, name, name);--changes value of name to equal name 3X -> concat to display proper formatting
UPDATE monsters
  SET characteristics = REVERSE(characteristics);--changes characteristics str to reversed string
SELECT name, characteristics --grabs updated column variables
FROM monsters;

--BEGIN
--GIVEN table of monsters
--must update value of name to repeat 3 times
--must revers string held as characterisitics
--return updatted table
