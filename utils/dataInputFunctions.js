
// Set up class constructor to export methods
const connections = require("../db/connection")

class DB {
    constructor (connection) {
        this.connection = connection
    }
    viewEmployeesQuery() {
        try {
            this.connection.promise().query("SELECT * FROM employee").then(results => {
            console.table(results[0])});
        } catch (error) {
            console.log(error);
        }
    }
    viewAllRolesQuery() {
        try {
            this.connection.promise().query("SELECT * FROM role").then(results => {
            console.table(results[0])});
        } catch (error) {
            console.log(error);
        }
    }
    viewAllDepartmentsQuery() {
        try {
            this.connection.promise().query("SELECT * FROM department").then(results => {
            console.table(results[0])});
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = new DB (connections);



