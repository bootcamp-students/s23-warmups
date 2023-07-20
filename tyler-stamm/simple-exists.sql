SELECT id, name FROM Departments
WHERE
EXISTS(SELECT price
      FROM sales
      WHERE 
      sales.department_id = Departments.id
      AND sales.price > 98.00);
    
-- extraTable.foreign key = primary key
