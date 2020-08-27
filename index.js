//Dependecies
//inquirer
//consol.table

const inquirer = require("inquirer");
const db = require("./db/index");
require("console.table");

async function start() {
    const { choice } = await inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "what do you want to do?",
            choices: [
                { name: "View ALL Employees", value: "VIEW_EMPLOYEES" },
                { name: "View Employees by Dept", value: "VIEW_EMPLOYEES_BY_DEPT" },
                { name: "View Employees by Manager", value: "VIEW_EMPLOYEE_BY_MANAGER" },
                { name: "ADD Employee", value: "ADD_EMPLOYEE" },
                { name: "REMOVE Employee", value: "REMOVE_EMPLOYEE" },
                { name: "UPDATE Employee Role", value: "UPDATE_EMPLOYEE_ROLE" },
                { name: "Update Manager", value: "UPDATE_EMPLOYEE_MANAGER" },
                { name: "VIEW All Roles", value: "VIEW_ROLES" },
                { name: "ADD Role", value: "ADD_ROLE" },
                { name: "VIEW All Departments", value: "VIEW_DEPARTMENTS" },
                { name: "ADD Department", value: "ADD_DEPARTMENTS" },
                { name: "REMOVE Department", value: "REMOVE_DEPARTMENT" },
                { name: "FINISH", value: "QUIT" },

            ]
        }
    ])

    switch (choice) {
        case "VIEW_EMPLOYEES":
            return viewEmployees();
        case "VIEW_EMPLOYEES_BY_DEPT":
            return viewEmployeesDept();
        case "VIEW_EMPLOYEE_BY_MANAGER":
            return viewEmployeesManager();
        case "ADD_EMPLOYEE":
            return addEmployee();
        case "REMOVE_EMPLOYEE":
            return removeEmployee();
        case "UPDATE_EMPLOYEE_ROLE":
            return updateEmployeeR();
            case "UPDATE_EMPLOYEE_MANAGER":
            return updateEmpoyeeM();
        case "VIEW_ROLES":
            return viewRoles();
        case "ADD_ROLES":
            return addRoles();
        case "VIEW_DEPARTMENTS":
            return viewDepart();
        case "ADD_DEPARTMENTS"
            

        default:
            console.log('quit');
    }



}

async function viewEmployees() {
    const data = await db.findAllEmployees();
    //  console.log(data)
    console.table(data);
    console.log("__________")
    start();
}

async function viewEmployees() {
    const data = await db.findAllEmployees();
    //  console.log(data)
    console.table(data);
    console.log("__________")
    start();
}
// async function viewEmployees() {
//     const data = await db.findAllEmployees();
// //  console.log(data)
// console.table(data);
// console.log("__________")
// start();





start();



