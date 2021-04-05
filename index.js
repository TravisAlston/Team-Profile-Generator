const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require ('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

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
                Manager.push(new Manager(employee, id, email, office))

                if (anotherEntry) {
                    return prompt();
                }
            })
            } else if
        })
    }

    prompt();