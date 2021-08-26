const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    let manager = new Manager('Dwight Schrute','dwight@dwightschrute.com', 307);

    expect(manager.name).toBe('Dwight Schrute');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('dwight@dwightschrute.com');
    expect(manager.officeNumber).toBe(307);
    expect(manager.role).toBe('Manager');
});