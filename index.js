// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { Console } = require('console');
const style = require("./src/style");
const { identity } = require('rxjs');
//const generateHtmlPage = require('./src/templatePage');


let team = [];

    // Create a function to initialize app

function init() {
    console.log("Welcome to the Team-Profile Generator!")
    inquirer.prompt([
        {   
            type: 'input',
            message: "Please enter a name for your team",
            name: "teamname",
             // Add validation to make sure user entered the input
            validate: teamname => {
                if (teamname) {
                return true;
                } else {
                console.log('Please enter the name of the team!');
                return false;
                }
            }
        }
    ])
        .then(function(data){
            const teamName = data.teamname;
            team.push(teamName);
            addManager();
        })
};
    
function addManager(){
    inquirer.prompt([
        {
            type: "input",
            message: "Enter team manager's name: ",
            name: "name",
            // Add validation to make sure user entered the input
            validate: name => {
                if (name) {
                return true;
                } else {
                console.log('Please enter the name of the manager!');
                return false;
                }
            }
        },
        {
            type: "number",
            message: "Enter team manager's employeeID: ",
            name: "id",
              // Add validation to make sure user entered the input
            validate: id => {
                if (id) {
                return true;
                } else {
                console.log('Please enter the id of the manager!');
                return false;
                }
            }
        },
        {
            type: "input",
            message: "Enter team manager's email address: ",
            name: "email",              
            // Add validation to make sure user entered the input
            validate: email => {
                if (email) {
                return true;
                } else {
                console.log('Please enter the email of the manager!');
                return false;
                }
            }
        },

        {
            type: "number",
            message: "Enter team manager's office number:",
            name: "officeNumber",
             // Add validation to make sure user entered the input
            validate: officenumber => {
                if (officenumber) {
                return true;
                } else {
                console.log('Please enter the officenumber of the manager!');
                return false;
                }
            }
        },
    ])

        .then(function (data) {
            const name = data.name;
            const id = data.id;
            const email = data.email;
            const officeNumber = data.officeNumber;
            const teamMember = new Manager(name, id, email, officeNumber);
            team.push(teamMember);
            addTeamMembers();
        });

};

function addEngineer(){
    inquirer.prompt([
        {
            type: 'input',
            message: "Enter engineer's name",
            name: "name",
            // Add validation to make sure user entered the input
            validate: name => {
                if (name) {
                return true;
                } else {
                console.log('Please enter the name of the Engineer!');
                return false;
                }
            }
        },
        {
            type: "number",
            message: "Enter engineer's ID",
            name: "id",
            // Add validation to make sure user entered the input
            validate: id => {
                if (id) {
                return true;
                } else {
                console.log('Please enter the id of the Engineer!');
                return false;
                }
            }
        },
        {
            type: 'input',
            message: "Enter engineer's email address",
            name: "email",
            // Add validation to make sure user entered the input
            validate: email => {
                if (email) {
                return true;
                } else {
                console.log('Please enter the email of the Engineer!');
                return false;
                }
            }
        },
        {
            type: 'input',
            message: "Enter engineer's Github username",
            name: "github",
            // Add validation to make sure user entered the input
            validate: github => {
                if (github) {
                return true;
                } else {
                console.log('Please enter the github username of the Engineer!');
                return false;
                }
            }
        }
    ])

        .then(function (data) {
            const name = data.name;
            const id = data.id;
            const email = data.email;
            const github = data.github;
            const teamMember = new Engineer(name, id, email, github);
            team.push(teamMember)
            addTeamMembers();
        });   
};

function addIntern(){
    inquirer.prompt([
        {
            type: 'input',
            message: "Enter intern's name: ",
            name: "name",
            // Add validation to make sure user entered the input
            validate: name => {
                if (name) {
                return true;
                } else {
                console.log('Please enter the name of the Intern!');
                return false;
                }
            }
        },
        {
            type: "number",
            message: "Enter intern's ID",
            name: "id",
             // Add validation to make sure user entered the input
             validate: id => {
                if (id) {
                return true;
                } else {
                console.log('Please enter the id of the Intern!');
                return false;
                }
            }
        },
        {
            type: 'input',
            message: "Enter intern's email address: ",
            name: "email",
             // Add validation to make sure user entered the input
             validate: email => {
                if (email) {
                return true;
                } else {
                console.log('Please enter the email of the Intern!');
                return false;
                }
            }
        },
        {
            type: 'input',
            message: "Enter intern's school: ",
            name: "school",
             // Add validation to make sure user entered the input
             validate: school => {
                if (school) {
                return true;
                } else {
                console.log('Please enter the school of the Intern!');
                return false;
                }
            }
        }
    ])

        .then(function (data) {
            const name = data.name;
            const id = data.id;
            const email = data.email;
            const school = data.school;
            const teamMember = new Intern(name, id, email, school);
            team.push(teamMember);
            addTeamMembers();
        });
};

function addTeamMembers() {
    inquirer.prompt([
        {
            type: "list",
            message: "Do you want to add more team members?",
            choices: ["Yes, add an engineer", "Yes, add an intern", "No, my team is complete"],
            name: "addMemberData"
        }
    ])

        .then(function (data) {
            switch (data.addMemberData) {
                case "Yes, add an engineer":
                    addEngineer();
                    break;
                case "Yes, add an intern":
                    addIntern();
                    break;
                case "No, my team is complete":
                    displayTeamProfile();
                    break;
            }
        });
};

    // function to display the added team in a html page
function displayTeamProfile(){
    console.log(team);
    console.log("Done! Checkout 'dist' folder for the generated html page");

    const htmlArray = []
    const htmlStart = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${team[0]}</title>
    <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet">
    <style>
     ${style}
    </style>
</head>
<body>
    <div class="nav-bar">
        <h1>${team[0]}</h1>
    </div>
    <div class="card-container">
    `
    htmlArray.push(htmlStart);

    for (let i = 1; i < team.length; i++) {
        let object = `
        <div class="member-card">
            <div class="card-top">
                <h2>${team[i].name}</h2>
                <h2>${team[i].getRole()}</h2>
            </div>
            <div class="card-bottom">
                    <p>Employee ID: ${team[i].id}</p>
                    <p>Email: <a href="mailto:${team[i].email}">${team[i].email}</a><p>
        `
                if (team[i].officeNumber) {
                    object += `
                    <p>OfficeNo.:${team[i].officeNumber}</a></p>
                    `
                }
                if (team[i].github) {
                    object += `
                    <p>GitHub: <a href="https://github.com/${team[i].github}">${team[i].github}</a></p>
                    `
                }
                if (team[i].school) {
                    object += `
                    <p>School: ${team[i].school}</a></p>
                    `
                }
                object += `
                </div>
            </div>
            `
        htmlArray.push(object)
    }
          const htmlEnd = `
        </div>
        </body>
        </html>
    `
    htmlArray.push(htmlEnd);

    fs.writeFile(`./dist/${team[0]}.html`, htmlArray.join(""), function (err) {
    })
}

    // Function call to initialize app
init();
    