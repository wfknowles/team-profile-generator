const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, email, school, id = false) {
      super(name, email, id);
      this.school = school;
      this.role = 'Intern';
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;