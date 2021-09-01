const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    let employee = new Employee('Dwight Schrute','dwight@dwightschrute.com');

    expect(employee.name).toBe('Dwight Schrute');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('dwight@dwightschrute.com');
    expect(employee.role).toBe('Employee');
});

test('get name from employee.getName()', () => {
    let employee = new Employee('Dwight Schrute', 'dwight@dwightschrute.com');
    expect(employee.getName()).toBe(employee.name);
});

test('get id from employee.getID()', () => {
    let employee = new Employee('Dwight Schrute', 'dwight@dwightschrute.com');
    expect(employee.getID()).toBe(employee.id);
});

test('get email from employee.getEmail()', () => {
    let employee = new Employee('Dwight Schrute', 'dwight@dwightschrute.com');

    expect(employee.getEmail()).toBe(employee.email);

});

test('get role from employee.getRole()', () => {
    let employee = new Employee('Dwight Schrute', 'dwight@dwightschrute.com');
    expect(employee.getRole()).toBe('Employee');
});

