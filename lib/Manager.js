const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, email, officeNumber, id = false) {
      super(name, email, id);
      this.officeNumber = officeNumber;
      this.role = 'Manager';
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;