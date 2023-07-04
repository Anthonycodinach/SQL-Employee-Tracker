const mysql = require("mysql2")

const dataBase = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "root",
    database: "company_db"
});

module.exports = dataBase;