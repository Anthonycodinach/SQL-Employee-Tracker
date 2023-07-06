
// Set up class constructor to export methods
const { title } = require("process");
const connections = require("../db/connection")
const menu = require("../index")

class DB {
    constructor(connection) {
        this.connection = connection
    }
    viewEmployeesQuery() {
        return this.connection.promise().query("SELECT * FROM employee");
    }
    viewAllRolesQuery() {
        return this.connection.promise().query("SELECT * FROM role");
    }
    viewAllDepartmentsQuery() {
      return this.connection.promise().query("SELECT * FROM department");
    }
    addEmployee(data) {
        try {
           this.connection.promise().query(`SELECT id FROM role WHERE title = '${data.employeeRole}'`).then(results => {
            this.connection.promise().query(`INSERT INTO employee (first_name, last_name, role_id) VALUES ('${data.employeeFirstName}', '${data.employeeLastName}', ${results[0][0].id})`).then(results => {
                console.log("New employee added to database")
            });
           });
        } catch (error) {
            console.log(error);
        }
    }
    addDepartment(data) {
        return this.connection.promise().query(`INSERT INTO department (name) VALUES ('${data.departmentName}')`)
    }
    addRole(data) {
       return this.connection.promise().query(`INSERT INTO role (title, salary)
        VALUES ('${data.roleName}', ${data.roleSalary})`);
    }
    updateEmployeeRole(data) {
        return this.connection.promise().query(`UPDATE employee SET department_id = '${data.departmentId}' WHERE first_name = '${data.firstName}', last_name = '${data.lastName}'`)
}};

module.exports = new DB(connections);

