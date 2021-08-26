const inquirer = require('inquirer');

class Employee {
    constructor(name = '', email = '', id = false) {
        this.name = name;
        this.email = email;
        this.id = id || 0; // I need to figure out an auto-incrementing id
        this.role = 'Employee';
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }

    // prompts() {
    //     inquirer
    //         .prompt(
    //             {
    //                 type: 'text',
    //                 name: 'name',
    //                 message: 'Name: (Required)',
    //                 validate: nameInput => {
    //                     if (nameInput) {
    //                         return true;
    //                     } else {
    //                         console.log('You need to enter name!');
    //                         return false;
    //                     }
    //                 }
    //             },
    //             {
    //                 type: 'text',
    //                 name: 'email',
    //                 message: 'Email Address: (Required)',
    //                 validate: emailInput => {
    //                     if (emailInput) {
    //                         return true;
    //                     } else {
    //                         console.log('You need to enter an email address!');
    //                         return false;
    //                     }
    //                 }
    //             },
    //             {
    //                 type: 'text',
    //                 name: 'id',
    //                 message: 'Employee ID: Press [ Enter ] to skip',
    //                 validate: idInput => {
    //                     if (idInput == '' || parseInt(idInput) != NaN) {
    //                         return true;
    //                     } else {
    //                         console.log('Employee ID must be a whole number, ie: 1 or 3890');
    //                         return false;
    //                     }
    //                 }
    //             }
    //         )
    //         .then(employeeData => {
    //             return new Employee(employeeData.name, employeeData.email, employeeData.id);
    //         });
    // }
}

module.exports = Employee;