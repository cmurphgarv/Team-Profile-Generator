// Package imports
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML');
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");

function managerQuestions() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Please enter the team manager name',
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'Please enter the manager ID number',
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Please enter the manager email',
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'What is the manager office number?',
        },
        {
            type: 'confirm',
            name: 'enterEmployee',
            message: 'Do you want to add another employee?',
        },
    ]).then((answer) => {
        const {managerName, managerID, managerEmail, officeName} = answer;
        employees.push(new Manager(managerName, managerID, managerEmail, officeName))
        if (answer.enterEmployee === true) {
            chooseEmployeeType()
        }    
    });
}

function chooseEmployeeType() {
    return inquirer.prompt(
        {
            type: "list",
            name: "employeeType",
            message: "Is the employee an engineer or an intern?",
            choices: ["Engineer", "Intern"],
        }
    ).then((answer) => {
        if(answer.employeeType == "Engineer") {
            engineerQuestions()
        } else {
            internQuestions()
        }
    })
}

function engineerQuestions() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'Please enter the employee name',
        },
        {
            type: 'input',
            name: 'engineerID',
            message: 'Please enter the employee ID number',
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Please enter the employee email',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter the employee github username',
        },
        {
            type: 'confirm',
            name: 'enterEmployee',
            message: 'Do you want to add another employee?',
        },

    ]).then((answer) => {
        if (answer.enterEmployee === true) {
            chooseEmployeeType()
        }    
    });
}

function internQuestions() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'Please enter the employee name',
        },
        {
            type: 'input',
            name: 'internID',
            message: 'Please enter the employee ID number',
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'Please enter the employee email',
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter the school the intern attends',
        },
        {
            type: 'confirm',
            name: 'enterEmployee',
            message: 'Do you want to add another employee?',
        },

    ]).then((answer) => {
        if (answer.enterEmployee === true) {
            chooseEmployeeType()
        }    
    });
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created HTML!')
    );
}

function init() {
    let employees = [];
    managerQuestions();
    writeToFile("index.html", generateHTML(employees));
}

init();