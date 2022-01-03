// imports the employee constructor
const Employee = require('./Employee')

// engineer constructor is created and it extends from the employee constructor
class Engineer extends Employee {
    constructor(name, id, email, username) {
        // super calls on the employee constructor
        super (name, id, email);

        this.username = username;
    }

    getUsername(){
        return this.username
    }

    getRole(){
        return 'Engineer'
    }
}

module.exports = Engineer;