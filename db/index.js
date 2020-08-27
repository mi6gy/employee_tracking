const connection = require("./conection");

class DB {
    constructor(conection){
        this.connection = connection;
    }

    findAllEmployees(){
        return {hey:'working employees'}
        //this.connection.query()
    }
    findEmployeesDepart(){
        return {hey:'working depart'}
        //this.connection.query()
    }
    findEmployeesManager(){
        return {hey:'working managers'}
        //this.connection.query()
    }
    findRoles(){
        return {hey: 'working ROLES'}
    }

}

// //cretaeEmployee(){
//     return this.con
// }

module.exports = new DB(connection);