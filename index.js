const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    { type: "list", name: "selectAction", message: "What would you like to do?", choices: [
        "View All Employees",
        "Add Employee",
        "Update Employee Role",
        "View All Roles",
        "Add Role",
        "View All Departments",
        "Add Department",
        "Quit"
    ]}
];

const addNewDepartment = [
    { type: "input", name: "departmentName", message: "What is the name of the department?"},
];

const addNewRole = [
    { type: "input", name: "roleName", message: "What is the title for the role?" },
    {
        type: "input",
        name: "roleSalary",
        message: "Please enter the annual slary for the role "
    },
    { type: "list", name: "newRoleDepartment", message: "Which department does the role belong to?", choices: [
        "Engineering",
        "Finance",
        "Legal",
        "Service",
        "Sales"
    ] }
];

const addNewEmployee = [
    { type: "input", name: "employeeFirstName", message: "What is the employee's first name?" },
    { type: "input", name: "employeeLastName", message: "What is the employee's last name?" },
    { type: "list", name: "employeeRole", message: "Which department does the role belong to?", choices: [
        "Sales Lead",
        "Salesperson",
        "Lead Engineer",
        "Software Engineer",
        "Account Manager",
        "Legal Team Lead",
        "Lawyer",
        "Customer Service"
    ] },
    { type: "list", name: "employeeManager", message: "Who is the employee's manager?", choices: [
        "John Doe",
        "Mike Chan",
        "Ashley Rodriguez",
        "Kevin Tupik",
        "Betty Martinez",
        "Malia Brown",
        "Tom Allen",
        "Scott Cawthon"
    ] }
];

const updateEmployeeRole = [
    { type: "input", name: "departmentName", message: "Which employee's role do you want to update?", choices: [
        "John Doe",
        "Mike Chan",
        "Ashley Rodriguez",
        "Kevin Tupik",
        "Betty Martinez",
        "Malia Brown",
        "Tom Allen",
        "Scott Cawthon"
    ] },
    { type: "list", name: "employeeRole", message: "Which role do you want to assign the selected employee?", choices: [
        "Sales Lead",
        "Salesperson",
        "Lead Engineer",
        "Software Engineer",
        "Account Manager",
        "Legal Team Lead",
        "Lawyer",
        "Customer Service"
    ] },
];


