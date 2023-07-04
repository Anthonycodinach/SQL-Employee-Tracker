const inquirer = require("inquirer");
const fs = require("fs");
const db = require("./utils/dataInputFunctions");

const questions = [
    {
        type: "list", name: "selectAction", message: "What would you like to do?", choices: [
            "View All Employees",
            "Add Employee",
            "Update Employee Role",
            "View All Roles",
            "Add Role",
            "View All Departments",
            "Add Department",
            "Quit"
        ]
    }
];

const addNewDepartment = [
    { type: "input", name: "departmentName", message: "What is the name of the department?" },
];

const addNewRole = [
    { type: "input", name: "roleName", message: "What is the title for the role?" },
    {
        type: "input",
        name: "roleSalary",
        message: "Please enter the annual slary for the role "
    },
    {
        type: "list", name: "newRoleDepartment", message: "Which department does the role belong to?", choices: [
            "Engineering",
            "Finance",
            "Legal",
            "Service",
            "Sales"
        ]
    }
];

const addNewEmployee = [
    { type: "input", name: "employeeFirstName", message: "What is the employee's first name?" },
    { type: "input", name: "employeeLastName", message: "What is the employee's last name?" },
    {
        type: "list", name: "employeeRole", message: "Which department does the role belong to?", choices: [
            "Sales Lead",
            "Salesperson",
            "Lead Engineer",
            "Software Engineer",
            "Account Manager",
            "Accountant",
            "Legal Team Lead",
            "Lawyer",
            "Customer Service"
        ]
    },
    {
        type: "list", name: "employeeManager", message: "Who is the employee's manager?", choices: [
            "John Doe",
            "Mike Chan",
            "Ashley Rodriguez",
            "Kevin Tupik",
            "Betty Martinez",
            "Malia Brown",
            "Tom Allen",
            "Scott Cawthon"
        ]
    }
];

const updateEmployeeRole = [
    {
        type: "input", name: "departmentName", message: "Which employee's role do you want to update?", choices: [
            "John Doe",
            "Mike Chan",
            "Ashley Rodriguez",
            "Kevin Tupik",
            "Betty Martinez",
            "Malia Brown",
            "Tom Allen",
            "Scott Cawthon"
        ]
    },
    {
        type: "list", name: "employeeRole", message: "Which new role do you want to assign the selected employee?", choices: [
            "Sales Lead",
            "Salesperson",
            "Lead Engineer",
            "Software Engineer",
            "Account Manager",
            "Legal Team Lead",
            "Lawyer",
            "Customer Service"
        ]
    },
];

function menu () {
    // run menu question with all possible choices
    inquirer.prompt(questions).then((response) => {
        console.log(response);
        // Write switch case based on user anser to run sub function
        switch (response.selectAction) {
            case "View All Employees":
                db.viewEmployeesQuery();
                break;
            case "Add Employee":
                inquirer.prompt(addNewEmployee).then((response) => {
                console.log(response)})
                break;
            case "Update Employee Role":
                inquirer.prompt(updateEmployeeRole).then((response) => {
                    console.log(response)})
                break;
            case "View All Roles":
                db.viewAllRolesQuery();
                break;
            case "Add Role":
                inquirer.prompt(addNewRole).then((response) => {
                    console.log(response)})
                break;
            case "View All Departments":
                db.viewAllDepartmentsQuery()
                break;
            case "Add Department":
                inquirer.prompt(addNewDepartment).then((response) => {
                    console.log(response)})
                break;
            case "Quit":
                statements
            default:
                console.log("No selection was made")
        }
        // Write different functions for each menu option of questions
    })
}

// Function call to initialize app
menu();
