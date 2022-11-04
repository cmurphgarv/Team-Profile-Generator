// Package imports
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML');

function employeeQuestions() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Please enter the team manager name',
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Please enter the employee ID number',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the employee email',
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
        return inquirer.prompt([
            {
                type: 'input',
                name: 'type',
                message: 'Is the employee an engineer or intern?',
            },
        ])
    });
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created HTML!')
    );
}

function init() {
    employeeQuestions().then((answers) => 
        writetoFile("index.html", generateHTML(answers)))
}

init();