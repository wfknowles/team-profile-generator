const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, email, github, id = false) {
      super(name, email, id);
      this.github = github;
      this.role = 'Engineer';
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;