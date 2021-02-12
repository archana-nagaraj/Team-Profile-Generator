const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test("Can instantiate Engineer instance", () => {
    const engineerObj = new Engineer();
    expect(typeof(engineerObj)).toBe("object");
});

test("Can set github username via constructor arguments", () => {
    const githubValue = 'github-username';
    const engineerObj = new Engineer('Bob', 1, 'name@email.com', githubValue);
    expect(engineerObj.github).toEqual(expect.any(String));
    expect(engineerObj.github).toBe(githubValue);
});

test("Can get github username via getGitHub() function", () => {
    const githubValue = 'github-username';
    const engineerObj = new Engineer('Bob', 1, 'name@email.com', githubValue);
    expect(engineerObj.getGitHub()).toBe(githubValue);
});

test("check getRole() function returns Engineer", () => {
    const role = 'Engineer';
    const engineerObj = new Engineer('Bob', 1, 'name@email.com', 'github-username');
    expect(engineerObj.getRole()).toBe(role);
})




