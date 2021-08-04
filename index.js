const inquirer = require("inquirer");
const db = require("./db/queries");

const init = () => {
    inquirer
      .prompt({
        name: 'action',
        type: 'rawlist',
        message: 'What would you like to do?',
        choices: [
            'View All Employees', 
            'View All Departments', 
            'View All Roles', 
            'Add Employee', 
            'Add Department', 
            'Add Role', 
            'Update Employee Role',
            'Update Employee Manager',
            'Delete an Employee'
        ],
      })

      .then((input) => {
        switch (input.action) {
          case 'View All Employees':
            viewEmployees();
            break;
  
          case 'View All Departments':
            viewDepartments();
            break;
  
          case 'View All Roles':
            viewRoles();
            break;
  
          case 'Add Employee':
            addEmployee();
            break;
  
          case 'Add Department':
            addDepartment();
            break;

          case 'Add Role':
            addRole();
            break;
        
          case 'Update Employee Role':
            updateEmployeeRole();
            break;

          case 'Update Employee Manager':
            updateEmployeeManager();
            break;

          case 'Delete an Employee':
            deleteEmployee();
            break;
  
          default:
            console.log(`Invalid action: ${input.action}`);
            break;
        }
      });
};

async function viewEmployees () {
    let employees = await db.findAllEmployees();
    console.table(employees); 
    init();
}

async function viewDepartments () {
    let departments = await db.findAlldepartments();
    console.table(departments);
    init(); 
}

async function viewRoles () {
    let roles = await db.findAllRoles();
    console.table(roles); 
    init();
}

async function addEmployee () {
    inquirer.prompt([
        {
            type: "input",
            name: "firstName",
            message: "Employee's first name?"
        },
        {
            type: "input",
            name: "lastName",
            message: "Employee's last name?"
        },
        {
            type: "list",
            name: "role",
            message: "Employee's role ID?",
            choices: [10, 15, 20, 25, 30, 35, 40, 45]
        },
        {
            type: "list",
            name: "manager",
            message: "Which manager ID will this employee report to?",
            choices: [100, 200, 300, 400]
        }
        
    ])
    .then((input) => {
        db.addNewEmployee(input);
        console.log("Employee has been added!");
        init();
    }) 
}

async function addDepartment() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the name of the new department?",
        },
        {
          type: "number",
          name: "id",
          message: "What is the department's id?",
        }
      ])
      .then((input) => {
        db.addNewDepartment(input);
        console.log('New department has been added.');
        init();
      });
  }

  async function addRole() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "title",
          message: "What is the role you would like to add?",
        },
        {
          type: "number",
          name: "id",
          message: "What is the id of this role?",
        },
        {
          type: "decimal",
          name: "salary",
          message: "What is the salary for this role?",
        },
        {
          type: "number",
          name: "departmentId",
          message: "What is the department id for this role?",
        },
      ])
      .then((input) => {
        db.addNewRole(input);
        console.log('New role has been added.');
        init();
      });
  }

  async function updateEmployeeRole() {
    inquirer
      .prompt([
        {
          type: "number",
          name: "id",
          message: "What is the id of the employee you would like to udpate?",
        },
        {
          type: "list",
          name: "title",
          message: "What is the new role id of the employee?",
          choices: [10, 15, 20, 25, 30, 35, 40, 45]
        },
      ])
      .then((input) => {
        db.changeEmployeeRole(input);
        console.log("Employee role has been updated.");
        init();
      });
  }

  async function updateEmployeeManager() {
    inquirer
      .prompt([
        {
          type: "number",
          name: "id",
          message: "ID of the employee whose manager you would like to udpate?",
        },
        {
          type: "list",
          name: "manager_id",
          message: "What is the id of the new manager for this employee?",
          choices: [100, 200, 300, 400]
        },
      ])
      .then((input) => {
        db.changeEmployee(input);
        console.log("Employee manager has been updated.");
        init();
      });
  }

  async function deleteEmployee() {
    inquirer
      .prompt([
        {
          type: "number",
          name: "id",
          message: "What is the id of the employee you would like to delete?",
        }
      ])
      .then((input) => {
        db.removeEmployee(input);
        console.log('Employee has been deleted.');
        init();
      });
  }

init();