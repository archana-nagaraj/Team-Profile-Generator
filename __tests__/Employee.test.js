const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test("Can instantiate Employee instance", () => {
    const employeeObj = new Employee();
    expect(typeof(employeeObj)).toBe("object");
  });

test('creates a Employee object', () => {
    // Create a new character with a `name`, `strength`, and `hitpoints` values
    // YOUR CODE HERE
    const employeeObj = new Employee('Bob', 1 , 'name@email.com');
    // Test that checks if the `name` is a `string`
    expect(employeeObj.name).toEqual(expect.any(String))
    // Test that checks if the `id` is a `number`
    expect(employeeObj.id).toEqual(expect.any(Number))
    // Test that checks if the `name` is a `string`
    expect(employeeObj.email).toEqual(expect.any(String))
  });

  test("Can set name via constructor arguments", () => {
    const nameValue = 'Bob';
    const employeeObj = new Employee(nameValue);
    expect(employeeObj.name).toBe(nameValue);
  });

  test("Can set id via constructor arguments", () => {
    const idValue = 1;
    const employeeObj = new Employee('Bob', idValue);
    expect(employeeObj.id).toBe(idValue);
  });

  test("Can set email via constructor arguments", () => {
    const emailValue = 'name@email.com';
    const employeeObj = new Employee('Bob', 1, emailValue);
    expect(employeeObj.email).toBe(emailValue);
  });

  test("Can get name via getName() function", () => {
    const nameValue = 'Bob';
    const employeeObj = new Employee(nameValue);
    expect(employeeObj.getName()).toBe(nameValue);
  });

  test("Can get id via getId() function", () => {
    const idValue = 1;
    const employeeObj = new Employee('Bob',idValue);
    expect(employeeObj.getId()).toBe(idValue);
  });

  test("Can get email via getEmail() function", () => {
    const emailValue = 'name@email.com';
    const employeeObj = new Employee('Bob', 1, emailValue);
    expect(employeeObj.getEmail()).toBe(emailValue);
  });

  test("check getRole() function returns Employee", () => {
      const role = "Employee";
      const employeeObj = new Employee('Bob', 1, 'name@email.com');
      expect(employeeObj.getRole()).toBe(role);
  })

