const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
    }
    getRole() {
        return `Team Manager`
    }
}

module.exports = Manager;