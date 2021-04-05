const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Travis Alston', '5678', 'traivs@gmail.com');

    expect(employee.name).toBe('Travis Alston');
    expect(employee.id).toBe('5678');
    expect(employee.email).toBe('traivs@gmail.com');
});

test("gets employee's name", () => {
    const employee = new Employee('Travis Alston', '5678', 'travis@gmail.com');

    expect(employee.getName()).toEqual(expect.stringContaining('Travis Alston'));
});

test("gets employee's ID", () => {
    const employee = new Employee('Travis Alston', '5678', 'travis@gmail.com');

    expect(employee.getId()).toEqual(expect.stringContaining('5678'));
});

test("gets employee's email", () => {
    const employee = new Employee('Travis Alston', '5678', 'travis@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('travis@gmail.com'));
});

test("gets employee's role", () => {
    const employee = new Employee('Travis Alston', '5678', 'travis@gmail.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});