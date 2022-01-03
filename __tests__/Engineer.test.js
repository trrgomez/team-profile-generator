const Engineer = require('../lib/Engineer')

// create an engineer object
test('create an engineer object', () => {
    const engineer = new Engineer('Diane', '57', 'diane@email.com','diane47')

    expect(engineer.username).toEqual(expect.any(String));
})

test('get enginner github username', () => {
    const engineer = new Engineer('Diane', '57', 'diane@email.com','diane47')

    expect(engineer.getUsername()).toEqual(expect.stringMatching(engineer.username.toString()))
})

test('get role', () => {
    const engineer = new Engineer('Diane', '57', 'diane@email.com','diane47')

    expect(engineer.getRole()).toEqual('Engineer')
})