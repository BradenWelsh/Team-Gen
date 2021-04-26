const fs = require('fs');
const inquirer = require('inquirer');

//Employees
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

//user answers
let engineerArr = [];
let managerArr = [];
let internArr = [];
let employeeArr = {engineerArr, managerArr, internArr};
//User questions
function promptUser(){
    return inquirer([
        {
            type: 'text',
            name: 'employeeName',
            message: "What is the employee's name? (Required!)",
            validate: employeeInput => {
                if (employeeInput) {
                    return true;
                }else {
                    console.log ("Please enter the employee's name.");
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'id',
            message: "What is the employee's id? (Required!)",
            validate: employeeInput => {
                if (idnInput) {
                    return true;
                }else {
                    console.log ("Please enter the employee's id.");
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'id',
            message: "What is the employee's email? (Required!)",
            validate: emailInput => {
                if (idnInput) {
                    return true;
                }else {
                    console.log ("Please enter the employee's email.");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'rank',
            message: "What is the employee's rank in the company? (Use arrow keys!)",
            choices: ['Engineer', 'Manger', 'Intern']
        },
    ])
//Rank questions
    .then(({employeeName, id, emailInput, rank}) => {
        if (role === 'Manager'){
            return inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'number',
                    message: "What is the Manager's number? (Required!)",
                    validate: numberInput => {
                        if (officeInput) {
                            return true;
                        } else {
                            console.log ("Please enter the Manager's number.");
                            return false;
                        }
                    }
                },
                {
                    type: 'confirm',
                    name: 'another',
                    message: 'Would you like to add another associate?'
                },
            ])
            .then(({officeInput, another}) => {
                managerArr.push(new Manager(employeeName, id, emailInput))
                if (another){
                    return promptUser();
                }
            })
        }else if (role === 'Engineer') {
            return inquirer
                .prompt([
                {
                    type: 'text',
                    name: 'github',
                    message: "What is the Engineer's github? (Required!)",
                    validate: githubInput => {
                        if (githubInput) {
                            return true;
                        } else {
                            console.log ("Please enter the Engineer's github.");
                            return false;
                        }
                    }
                },
                {
                    type: 'confirm',
                    name: 'another',
                    message: 'Would you like to add another associate?'
                },
            ])
            .then(({github, another}) => {
                engineerArr.push(new Manager(employeeName, id, emailInput, githubInput))
                if (more){
                    return promptUser();
                }
            })
        } else if (role === 'Intern') {
            return inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'school',
                    message: 'Where did or does your intern go to school? (Required!)',
                    validate: schInput => {
                        if(schInput){
                            return true;
                        } else {
                            console.log ('Please enter the school your intern went or attends.');
                            return false;
                        }
                    }
                }
            ])
            .then(({school, another}) => {
                internArr.push(new Intern(employeeName, id, emailInput, schInput))
                if (another) {
                    return promptUser();
                }
            })
        }
    }) 
}

