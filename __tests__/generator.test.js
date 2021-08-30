const { expect } = require('@jest/globals');
const Generator = require('../lib/Generator.js');
const Manager = require('../lib/Manager.js');

test('creates a generator object', () => {
    let generator = new Generator();

    expect(generator.team).toEqual([]);
    expect(generator.id).toBe(0);
});

test('setID is correctly advancing the id count', () => {
    let generator = new Generator();
    let firstID = generator.setID();
    let secondID = generator.setID();
    let thirdID = generator.setID();

    expect(firstID).toBe(0);
    expect(secondID).toBe(firstID + 1);
    expect(thirdID).toBe(secondID + 1);
});

test('findByID is correctly returning values', () => {
    let generator = new Generator();
    let currentID = generator.setID();
    let employee1 = generator.findByID(currentID);
    expect(employee1).toEqual(false);

    generator.team.push(new Manager('Dwight Schrute','dwight@dwightschrute.com', 307, currentID));
    let employee2 = generator.findByID(currentID);
    
    expect(employee2.id).toBe(currentID);
    expect(generator.id).toBe(currentID + 1);
});

