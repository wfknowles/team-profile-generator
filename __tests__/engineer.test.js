const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    let manager = new Engineer('Dwight Schrute','dwight@dwightschrute.com', 'dschrute');

    expect(manager.name).toBe('Dwight Schrute');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('dwight@dwightschrute.com');
    expect(manager.github).toBe('dschrute');
    expect(manager.role).toBe('Engineer');
});