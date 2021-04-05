const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require ('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const { choices } = require('yargs');

function Prompt() {

    return inquirer
    .prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What is the employee role?',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
        type: 'text',
        name: 'employee',
        message: 'What is the employee ID number?'
        },
        {
            type:'text',
            name: 'email',
            message: 'What is the employee email?'
        }])
    }