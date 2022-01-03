const Manager = require('../lib/Manager')

test('create manager object', () => {
    const manager = new Manager('Diane', 60, 'diane47@email.com', 10)

    expect(manager.officeNumber).toEqual(expect.any(Number))
})

test('get role', () => {
    const manager = new Manager('Diane', 60, 'diane47@email.com')

    expect(manager.getRole()).toEqual("Manager")
})

