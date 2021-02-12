const { test } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test("Can instantiate Manager instance", () => {
    const managerObj = new Manager();
    expect(typeof(managerObj)).toBe("object");
});

test("Can set office number via constructor arguments", () => {
    const officeNumberValue = 999;
    const managerObj = new Manager('Bob', 1, 'name@email.com', officeNumberValue);
    expect(managerObj.officeNumber).toBe(officeNumberValue);
});

test("Can get office number via getOfficeNumber() function", () => {
    const officeNumberValue = 999;
    const managerObj = new Manager('Bob', 1, 'name@email.com', officeNumberValue);
    expect(managerObj.getOfficeNumber()).toBe(officeNumberValue);
});

test("check getRole() function returns Manager", () => {
    const role = 'Manager';
    const managerObj = new Manager('Bob', 1, 'name@email.com', 999);
    expect(managerObj.getRole()).toBe(role);
})