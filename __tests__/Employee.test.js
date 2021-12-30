const Employee = require('../lib/Employee');

test('create a new employee object', () => {
    const employee = new Employee('Jane', 24, 'jane47@email.com')

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('get employee name', () => {
    const employee = new Employee('Jane', 24, 'jane47@email.com')

    expect(employee.getEmployeeName()).toEqual(expect.any(String));
})

test('get employee id', () => {
    const employee = new Employee('Jane', 24, 'jane47@email.com')

    expect(employee.getEmployeeId()).toEqual(expect.any(Number));
})

test('get employee email', () => {
    const employee = new Employee('Jane', 24, 'jane47@email.com')

    expect(employee.getEmployeeEmail()).toEqual(expect.any(String));
})