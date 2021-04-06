const Engineer = require('../lib/engineer.js')

test('creates an engineer object', () => {
    const engineer = new Engineer ('Laurel Alston', '2222', 'laurel@gmail.com', 'laurelloogit')
    
    expect(engineer.name).toBe('Laurel Alston');
    expect(engineer.id).toBe('2222');
    expect(engineer.email).toBe('laurel@gmail.com');
    expect(engineer.github).toBe('laurelloogit');
});

test ("gets engineer's github username", () => {
    const engineer = new Engineer ('Laurel Alston', '2222', 'laurel@gmail.com', 'laurelloogit')

    expect(engineer.getGithub()).toEqual(expect.stringContaining('laurelloogit'));
});

test("gets engineer's role", () => {
    const engineer = new Engineer ('Laurel Alston', '2222', 'laurel@gmail.com', 'laurelloogit')

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});