const inquirer = require("inquirer");
const db = require("./db/queries");

async function viewEmployees () {
    let employees = await db.findAllEmployees();
    console.log(employees); 
}

viewEmployees();

async function viewDepartments () {
    let departments = await db.findAlldepartments();
    console.log(departments); 
}

viewDepartments();

async function viewRoles () {
    let roles = await db.findAllRoles();
    console.log(roles); 
}

viewRoles();