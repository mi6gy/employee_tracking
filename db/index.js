const connection = require("./conection");

class DB {
    constructor(conection){
        this.connection = connection;
    }

    findAllEmployees(){
        return this.connection.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name AS department, CONCAT (manager.first_name,' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id");
        //this.connection.query()
    }
    findEmployeesDepart(){
        return this.connection.query("SELECT department.id, department.name FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id GROUP BY department.id, department.name");
        //this.connection.query()
    }
    findEmployeesManager(){
        return {hey:'working managers'}
        //this.connection.query()
    }
    findRoles(){
        return this.connection.query("SELECT role.id, role.title,role.salary FROM role LEFT JOIN department on role.department_id = department.id");
    }

}

// //cretaeEmployee(){
//     return this.con
// }

module.exports = new DB(connection);

