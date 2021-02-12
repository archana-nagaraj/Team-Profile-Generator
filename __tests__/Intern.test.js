const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test("Can instantiate Intern instance", () => {
    const internObj = new Intern();
    expect(typeof(internObj)).toBe("object");
});

test("Can set school name via constructor arguments", () => {
    const schoolValue = 'UCBerkley';
    const internObj = new Intern('Bob', 1, 'name@email.com', schoolValue);
    expect(internObj.school).toEqual(expect.any(String));
    expect(internObj.school).toBe(schoolValue);
});

test("Can get office number via getOfficeNumber() function", () => {
    const schoolValue = 'UCBerkley';
    const internObj = new Intern('Bob', 1, 'name@email.com', schoolValue);
    expect(internObj.getSchool()).toBe(schoolValue);
});

test("check getRole() function returns Intern", () => {
    const role = 'Intern';
    const internObj = new Intern('Bob', 1, 'name@email.com', 'UCBerkley');
    expect(internObj.getRole()).toBe(role);
})