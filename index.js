//Dependecies
//inquirer
//consol.table

const inquirer = require("inquirer");
const db = require("./db/index");
require("console.table");

async function start (){
     const { choice } = await inquirer.prompt([
         {
            type:"list",
            name: "choice",
            message: "what do you want to do?",
            choices: [
                { name: "View Employees", value: "VIEW_EMPLOYEES"},
                { name: "View Employees by Dept", value: "VIEW_EMPLOYEES_BY_DEPT"}
            ]
       }
])

                switch (choice){
                  case "VIEW_EMPLOYEES":
                        return viewEmployees();
                  case "VIEW_EMPLOYEES_BY_DEPT":
                        return viewEmployeesByDept();
                    default:
                        console.log('quit');
                }



}

        async function viewEmployees(){
            const data = await db.findAllEmployees();
            console.log(data)
        }


    

start();



