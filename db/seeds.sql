INSERT INTO department (id, name)
VALUES 
    (
        1,
        'Sales'
    ),
    (
        2,
        'Engineering'
    ),
    (
        3,
        'Finance'
    ),
    (
        4,
        'Legal'
    );

INSERT INTO role (id, title, salary, department_id)
VALUES 
    (
        10,
        'Sales Lead',
        200000,
        1
    ), 
    (
        15,
        'Salesperson',
        100000,
        1
    ), 
    (
        20,
        'Head Engineer',
        200000,
        2
    ), 
    (
        25,
        'Software Engineer',
        100000,
        2
    ),
    (
        30,
        'Finance Lead',
        200000,
        3
    ), 
    (
        35,
        'Financial Analyst',
        100000,
        3
    ),
    (
        40,
        'Legal Counsel Lead',
        200000,
        4
    ),
    (
        45,
        'Legal Associate',
        100000,
        4
    );

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    (
        'Jeff',
        'Bezos',
        10,
        100
    ),
    (
        'Elon',
        'Musk',
        15,
        null
    ),
    (
        'Mark',
        'Zuckerberg',
        20,
        200
    ),
    (
        'Mark',
        'Cuban',
        25,
        null
    ),
    (
        'Mary',
        'Barra',
        30,
        300
    ),
    (
        'Abagail',
        'Johnson',
        35,
        null
    ),
    (
        'Bill',
        'Gates',
        40,
        400
    ),
    (
        'Tim',
        'Cook',
        45,
        null
    );