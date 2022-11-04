const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    // Method to retrieve intern's school
    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}