const { expect } = require('@jest/globals');
const Intern = require('../lib/Intern.js');

test('creates an engineer object', () => {
    let manager = new Intern('Dwight Schrute','dwight@dwightschrute.com', 'School of Hard Knocks');

    expect(manager.name).toBe('Dwight Schrute');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('dwight@dwightschrute.com');
    expect(manager.school).toBe('School of Hard Knocks');
    expect(manager.role).toBe('Intern');
});