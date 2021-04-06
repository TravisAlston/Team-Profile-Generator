const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require ('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const pageGenerator = require('./src/page-template');
const writeFile = require('./src/generate-page');

let manager = [];
let engineer = [];
let intern = [];
let employeeArr = {manager, engineer, intern};

function prompt() {

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
        .then(({employee, id, email, role}) => {
            if(role ==='Manager') {
                return inquirer
                .prompt([{
                    type:'text',
                    name: 'office',
                    message: 'What is the Manager office number?'
                },
            {
                type:'confirm',
                name:'anotherEntry',
                message: 'Would you like to add another employee?',
                default: true
            }])
            .then(({office, anotherEntry}) => {
                manager.push(new Manager(employee, id, email, office))

                if (anotherEntry) {
                    return prompt();
                }
            })
            } else if (role === 'Engineer') {
                return inquirer
                .prompt([{
                    type:'text',
                    name: 'github',
                    message:'What is the Engineer Github username?'
                },
                {
                    type: 'confirm',
                    name: 'anotherEntry',
                    message: 'Would you like to add another employee',
                    default: true
                }])
                .then(({github, anotherEntry}) => {
                    engineer.push(new Engineer(employee, id, email, github))

                    if(anotherEntry) {
                        return prompt();
                    }
                })
            } else if (role === 'Intern') {
                return inquirer
                .prompt([{
                    type:'text',
                    name:'school',
                    message:'What is the Intern school?'
                },
            {
                type:'confirm',
                name:'anotherEntry',
                message:'Would you like to add another employee?',
                default: true
            }])
            .then(({school, anotherEntry}) => {
                intern.push(new Intern(employee, id, email, school))

                if(anotherEntry) {
                    return prompt();
                }
            })
            }
        })
    };

    prompt()
    .then(teamData => {
        return generateEmptyCoverage(employeeArr)
    })
    .then(pageHTML => {
        return writeFile(pageHTML)
    });