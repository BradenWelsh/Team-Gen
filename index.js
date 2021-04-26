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
}