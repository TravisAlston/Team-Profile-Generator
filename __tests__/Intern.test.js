const Intern = require('../lib/Intern.js');

test ('creates an intern object', () => {
    const intern = new Intern('Elias Alston', '1234', 'elias@gmail.com', 'College');
    expect(intern.name).toBe('Elias Alston');
    expect(intern.id).toBe('1234');
    expect(intern.email).toBe('elias@gmail.com');
    expect(intern.school).toBe('College');
});

test("gets intern's school", () => {
    const intern = new Intern('Elias Alston', '1234', 'elias@gmail.com', 'College');
    expect(intern.getSchool()).toEqual(expect.stringContaining('College'));
});

test("gets intern's role", () => {
    const intern = new Intern('Elias Alston', '1234', 'elias@gmail.com', 'College');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});