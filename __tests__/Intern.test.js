const Intern = require('../lib/Intern')


test('create an intern object', () => {
    const intern = new Intern('John', 56, 'john24@email.com', 'University Name')

    expect(intern.school).toEqual(expect.any(String))
})

test('get the school name', () => {
    const intern = new Intern('John', 56, 'john24@email.com', 'University Name')

    expect(intern.getSchool()).toEqual(expect.stringMatching(intern.school.toString()))
})

test('get role', () => {
    const intern = new Intern('John', 56, 'john24@email.com', 'University Name')

    expect(intern.getRole()).toEqual('Intern')
})


