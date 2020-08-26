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

// cretaeEmployee(){
//     return this.connection.query()
// }

module.exports = new DB(connection);