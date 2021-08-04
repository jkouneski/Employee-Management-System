const connection = require("./connection");

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    findAllEmployees() {
        return this.connection.query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id;"
        );
    }

    findAlldepartments() {
        return this.connection.query(
            "SELECT department.name FROM department;"
        );
    }

    findAllRoles() {
        return this.connection.query(
            "SELECT role.title, role.salary, role.department_id FROM role;"
        );
    }

    addNewEmployee(input) {
        return this.connection.query(
            "INSERT INTO employee SET ?",
            {
                first_name: input.firstName,
                last_name: input.lastName,
                role_id: input.role,
                manager_id: input.manager
            }
        );
    }

    addNewDepartment(input) {
        return this.connection.query(
            "INSERT INTO department SET ?",
            {
                id: input.id,
                name: input.name
            }
        );
    }

    addNewRole(input) {
        return this.connection.query(
            "INSERT INTO role SET ?",
            {
                id: input.id,
                title: input.title,
                salary: input.salary,
                department_id: input.departmentId
            }
        );
    }

    changeEmployeeRole(input) {
        return this.connection.query(
            'UPDATE employee SET ? WHERE ?',
            [
                {
                    role_id: input.title,
                },
                {
                    id: input.id,
                }, 
            ],
        );
    }

    changeEmployeeManager(input) {
        return this.connection.query(
            'UPDATE employee SET ? WHERE ?',
            [
                {
                    manager_id: input.manager_id,
                },
                {
                    id: input.id,
                }, 
            ],
        );
      }

    removeEmployee(input) {
        return this.connection.query(
            'DELETE FROM employee WHERE ?',
            [
                {
                    id: input.id,
                },
            ],
        );
      }
}


module.exports = new DB(connection);