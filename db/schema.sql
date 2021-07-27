DROP DATABASE IF EXISTS employees;

CREATE DATABASE employees;

USE employees;

--department table--
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(25) NOT NULL,
    PRIMARY KEY (id)
);

--role table--
CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(25),
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

--employee table--
CREATE TABLE employee (
    
)