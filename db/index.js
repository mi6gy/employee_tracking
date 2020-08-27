const connection = require("./conection");

class DB {
    constructor(conection){
        this.connection = connection;
    }

    findAllEmployees(){
        return {hey:'working'}
        //this.connection.query()
    }
}

// //cretaeEmployee(){
//     return this.con
// }

module.exports = new DB(connection);