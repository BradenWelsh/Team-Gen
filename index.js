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