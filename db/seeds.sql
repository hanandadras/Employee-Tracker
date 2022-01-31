INSERT INTO   department  (name)
VALUES
("finance"),("engineering"),("legal");


INSERT INTO   role  (title, salary, department_id)
VALUES
("accountant","70000", 1),("lead_engineer","170000", 2 ),("lawyer","150000", 3 ),("legal_team_lead","250000",3),("software_engineer","120000",2);


INSERT INTO   employee  (first_name, last_name, role_id, manager_id)
VALUES
("Ashley","Rodriguez",1, NULL),("kevin","stoo",2,2),("Mike","Chan","3",NULL),("Malia","Brown",3, 2);