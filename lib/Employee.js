const inquirer = require('inquirer');

class Employee {
    constructor(name = '', email = '', id = false) {
        this.name = name;
        this.email = email;
        this.id = id || 0;
        this.role = 'Employee';
    }

    getName() {
        return this.name;
    }

    getID() {
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