
// Set up class constructor to export methods
const connections = require("../db/connection")

class DB {
    constructor(connection) {
        this.connection = connection
    }
    viewEmployeesQuery() {
        try {
            this.connection.promise().query("SELECT * FROM employee").then(results => {
                console.table(results[0]);
            });
        } catch (error) {
            console.log(error);
        }
    }
    viewAllRolesQuery() {
        try {
            this.connection.promise().query("SELECT * FROM role").then(results => {
                console.table(results[0])
            });
        } catch (error) {
            console.log(error);
        }
    }
    viewAllDepartmentsQuery() {
        try {
            this.connection.promise().query("SELECT * FROM department").then(results => {
                console.table(results[0])
            });
        } catch (error) {
            console.log(error);
        }
    }
    addEmployee(data) {
        // let addEmployeeSql = `INSERT INTO employee (first_name, last_name) VALUES (${data.employeeFirstName},${data.employeeLasttName})`
        try {
            this.connection.promise().query(`INSERT INTO employee (first_name, last_name) VALUES (${data.employeeFirstName}, ${data.employeeLastName})`).then(results => {
                this.viewEmployeesQuery(results)
            });
        } catch (error) {
            console.log(error);
        }
    }
    addDepartment(data) {
        // let addEmployeeSql = `INSERT INTO employee (first_name, last_name) VALUES (${data.employeeFirstName},${data.employeeLasttName})`
        try {
            this.connection.promise().query(`INSERT INTO department (name) VALUES (${data.departmentName})`).then(results => {
                this.viewAllDepartmentsQuery(results)
            });
        } catch (error) {
            console.log(error);
        }
    }
    addRole(data) {
        // let addEmployeeSql = `INSERT INTO employee (first_name, last_name) VALUES (${data.employeeFirstName},${data.employeeLasttName})`
        try {
            this.connection.promise().query(`INSERT INTO role (title, salary)
            VALUES (${data.roleName}, ${data.roleSalary})`).then(results => {
                this.viewAllrolesQuery(results)
            });
        } catch (error) {
            console.log(error);
        }
    }
    updateEmployeerole(data) {
        // let addEmployeeSql = `INSERT INTO employee (first_name, last_name) VALUES (${data.employeeFirstName},${data.employeeLasttName})`
        try {
            this.connection.promise().query(`UPDATE employees SET department = ${data.departmentName} WHERE first_name = ${data.firstName}, last_name = ${data.lastname}`).then(results => {
                this.viewEmployeesQuery(results)
            });
        } catch (error) {
            console.log(error);
        }
}};

module.exports = new DB(connections);

