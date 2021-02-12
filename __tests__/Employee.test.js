const { test } = require('@jest/globals');
const Employee = require('../lib/Employee');

test("Can instantiate Employee instance", () => {
    const employeeObj = new Employee();
    expect(typeof(employeeObj)).toBe("object");
  });

test('creates a Employee object', () => {
    // Create a new character with a `name`, `strength`, and `hitpoints` values
    // YOUR CODE HERE
    const employeeObj = new Employee('Bob',1 , 'name@email.com');
    // Test that checks if the `name` is a `string`
    expect(employeeObj.name).toEqual(expect.any(String))
    // Test that checks if the `id` is a `number`
    expect(employeeObj.id).toEqual(expect.any(Number))
    // Test that checks if the `name` is a `string`
    expect(employeeObj.email).toEqual(expect.any(String))
  });

  test("Can set name via constructor arguments", () => {
    const nameValue = "Bob";
    const employeeObj = new Employee(nameValue);
    expect(employeeObj.name).toBe(nameValue);
  });

  test("Can set id via constructor arguments", () => {
    const idValue = "1";
    const employeeObj = new Employee(idValue);
    expect(employeeObj.name).toBe(idValue);
  });

  test("Can set email via constructor arguments", () => {
    const emailValue = "name@email.com";
    const employeeObj = new Employee(emailValue);
    expect(employeeObj.name).toBe(emailValue);
  });



