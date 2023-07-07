
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
    addEmployee(roleId, firstName, lastName) {
        return this.connection.promise().query(`INSERT INTO employee (first_name, last_name, role_id) VALUES ('${firstName}', '${lastName}', ${roleId})`)
    }
    addDepartment(data) {
        return this.connection.promise().query(`INSERT INTO department (name) VALUES ('${data.departmentName}')`)
    }
    addRole(data) {
       return this.connection.promise().query(`INSERT INTO role (title, salary)
        VALUES ('${data.roleName}', ${data.roleSalary})`);
    }
    updateEmployeeRole(roleId, firstName, lastName) {
        return this.connection.promise().query(`UPDATE employee SET role_id = ${roleId} WHERE first_name = '${firstName}' AND last_name = '${lastName}'`)
    }
    findRoleByName(roleName) {  
        return this.connection.promise().query(`SELECT id FROM role WHERE title = '${roleName}'`);
    }
}
module.exports = new DB(connections);

