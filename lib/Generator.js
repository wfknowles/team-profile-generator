//Utils
const inquirer = require('inquirer');
const generatePage = require('../utils/html.js');
const { writeFile, copyFile } = require('../utils/file.js');

//Models
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

class Generator {

    constructor(team = [], id = 0) {
        this.team = team;
        this.id  = id;
    }

    getTeam() {
        return this.team;
    }

    getID() {
        return this.id;
    }

    findByID(id) {
        return this.team.filter(member => member.id == id)[0] || false;
    }

    // Assign IDs and update this.id
    setID(id = false) {
        if (id) {
            // user input ID
            this.id = id + 1;
            return id;
        } else {
            // system generated ID
            const currentID = this.id;
            this.id++;
            return currentID;
        }
    }

    // Start the generator decision tree
    start() {
        inquirer
            .prompt({
                type: 'list',
                name: 'select',
                message: 'Select a team member to add:',
                choices: ['Add Manager', 'Add Engineer', 'Add Intern'],
            }).then(({select}) => {
                this.parseChoice(select);
            });
    }

    // Route user back to the generator decision tree
    next() {
        inquirer
            .prompt({
                type: 'list',
                name: 'select',
                message: 'Select a team member or hit "Done" to finish:',
                choices: ['Add Manager', 'Add Engineer', 'Add Intern', 'Done'],
            }).then(({select}) => {
                this.parseChoice(select);
            });
    }

    // Handle selection and respond with appropriate action
    parseChoice(select) {
        switch (select) {
            case 'Add Manager': 
                this.addManager();
                break;
            case 'Add Engineer': 
                this.addEngineer();
                break;
            case 'Add Intern': 
                this.addIntern();
                break;
            case 'Done': 
                this.build();
                break;
        }
    }

    // Employee parent class prompts
    // Called from within addManager, addEngineer, and addIntern
    addEmployee() {
        return inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'name',
                    message: 'Name: (Required)',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            return 'You need to enter name!';
                        }
                    }
                },
                {
                    type: 'text',
                    name: 'email',
                    message: 'Email Address: (Required)',
                    validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            return 'You need to enter an email address!';
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Employee ID: Press [ Enter ] to skip',
                    validate: idInput => {
                        const idInt = parseInt(idInput);
                        if (idInt == 'NaN') {
                            //string
                            return 'Employee ID must be a whole number, ie: 1 or 3890'; 
                        } else if (this.findByID(idInt)) {
                            // exists
                            return 'ID already exists. Please input a unique ID.';
                        }

                        return true;
                    },
                }
            ])
            .then(employeeData => {
                if (employeeData.id == '') {
                    employeeData.id = this.setID();
                } else {
                    employeeData.id = this.setID(parseInt(employeeData.id));
                }
                return employeeData;
            });
    }

    // Create manager and insert into team
    addManager() {
        this.addEmployee().then(employee => {
            inquirer
                .prompt(
                    {
                        type: 'text',
                        name: 'officeNumber',
                        message: 'Office Number: (Required)',
                        validate: nameInput => {
                            if (nameInput) {
                                return true;
                            } else {
                                return 'You need to enter an office number!';
                            }
                        }
                    }
                )
                .then(managerData => {
                    // Add manager to team
                    this.team.push(new Manager(employee.name, employee.email, managerData.officeNumber, employee.id));

                    // Back to decision tree
                    this.next();
                });
        });
    }

    // Create engineer and insert into team
    addEngineer() {
        this.addEmployee().then(employee => {
            return inquirer
                .prompt(
                    {
                        type: 'text',
                        name: 'github',
                        message: 'Github Username: (Required)',
                        validate: githubInput => {
                            if (githubInput) {
                                return true;
                            } else {
                                console.log('You need to enter a Github username!');
                                return false;
                            }
                        }
                    }
                )
                .then(engineerData => {
                    // Add engineer to team
                    this.team.push(new Engineer(employee.name, employee.email, engineerData.github, employee.id));

                    // Back to decision tree
                    this.next();
                });
        });
    }

    addIntern() {
        this.addEmployee().then(employee => {
            return inquirer
                .prompt(
                    {
                        type: 'text',
                        name: 'school',
                        message: 'School Name: (Required)',
                        validate: schoolInput => {
                            if (schoolInput) {
                                return true;
                            } else {
                                console.log('You need to enter a school name!');
                                return false;
                            }
                        }
                    }
                )
                .then(internData => {
                    // Add intern to team
                    this.team.push(new Intern(employee.name, employee.email, internData.school, employee.id));

                    // Back to decision tree
                    this.next();
                });
        });
    }

    build() {
        const pageHTML = generatePage(this.team);
        writeFile(pageHTML)
            .then(writeFileResponse => {
                return copyFile();
            })
            .then(copyFileResponse => {
                console.log('Website successfully generated within ./dist');
            })
            .catch(err => {
                console.log(err);
            });
    }
}

module.exports = Generator;