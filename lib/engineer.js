const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    // Method for retrieving link to engineer's github
    getGithub() {
        return `https://github.com/${this.github}`
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;