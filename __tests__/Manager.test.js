const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Bethany Alston', '4444', 'bethany@gmail.com', 'T111');
    
    expect(manager.name).toBe('Bethany Alston');
    expect(manager.id).toBe('4444');
    expect(manager.email).toBe('bethany@gmail.com');
    expect(manager.office).toBe('T111');
});

test("gets employee's role", () => {
    const manager = new Manager('Travis Alston', '5678', 'travis@gmail.com', 'T111');

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});