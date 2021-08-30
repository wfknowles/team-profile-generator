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
}

module.exports = Employee;