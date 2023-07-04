INSERT INTO department (name)
VALUES ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Service"),
       ("Sales");
       
INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 5),
       ("Salesperson", 80000, 5),
       ("Lead Engineer", 150000, 1),
       ("Software Engineer", 120000, 1),
       ("Account Manager", 160000, 4),
       ("Accountant", 125000, 2),
       ("Legal Team Lead", 250000, 3),
       ("Lawyer", 190000, 5);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("John", "Doe", 1),
    ("Mike", "Chan", 2),
    ("Ashley", "Rodriguez", 3),
    ("Kevin", "Tupik", 4),
    ("Betty", "Martinez", 5),
    ("Malia", "Brown", 6),
    ("Tom", "Allen", 7),
    ("Scott", "Cawthon",8);