class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Method for getting employee name
    getName() {
        return this.name
    }

    // Method for getting employee ID
    getID() {
        return this.id
    }

    // Method for getting employee role
    getRole() {
        return 'Employee'
    }

    getEmail() {
        return `mailto:${this.email}`
    }
}

module.exports = Employee;