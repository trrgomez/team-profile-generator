class Employee {
    
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // gets the employee name
    getEmployeeName(){
        return this.name;
    }
    // gets the employee id
    getEmployeeId(){
        return this.id;
    }
    // gets the employee email
    getEmployeeEmail(){
        return this.email;
    }
}

module.exports = Employee;