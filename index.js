// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { Console } = require('console');
const style = require("./src/style");
//const generateHtmlPage = require('./src/templatePage');


let team = [];

    // Create a function to initialize app

function init() {
    console.log("Welcome to the Team-Profile Generator!")
    inquirer.prompt([
        {
            message: "Please enter a name for your team",
            name: "teamname"
        }
    ])
        .then(function(data){
            const teamName = data.teamname
            team.push(teamName)
            addManager();
        })
};
    
function addManager(){
    inquirer.prompt([
        {
            type: "input",
            message: "Enter team manager's name: ",
            name: "name"
        },
        {
            type: "number",
            message: "Enter team manager's employeeID: ",
            name: "id"
        },
        {
            type: "input",
            message: "Enter team manager's email address: ",
            name: "email"
        },

        {
            type: "number",
            message: "Enter team manager's office number:",
            name: "officeNumber"
        },
    ])

        .then(function (data) {
            const name = data.name
            const id = data.id
            const email = data.email
            const officeNumber = data.officeNumber
            const teamMember = new Manager(name, id, email, officeNumber)
            team.push(teamMember)
            addTeamMembers();
        });

};

function addEngineer(){
    inquirer.prompt([
        {
            type: 'input',
            message: "Enter engineer's name",
            name: "name"
        },
        {
            type: "number",
            message: "Enter engineer's ID",
            name: "id"
        },
        {
            type: 'input',
            message: "Enter engineer's email address",
            name: "email"
        },
        {
            type: 'input',
            message: "Enter engineer's Github profile",
            name: "github"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = data.id
            const email = data.email
            const github = data.github
            const teamMember = new Engineer(name, id, email, github)
            team.push(teamMember)
            addTeamMembers()
        });   
};

function addIntern(){
    inquirer.prompt([
        {
            type: 'input',
            message: "Enter intern's name: ",
            name: "name"
        },
        {
            type: "number",
            message: "Enter intern's ID",
            name: "id"
        },
        {
            type: 'input',
            message: "Enter intern's email address: ",
            name: "email"
        },
        {
            type: 'input',
            message: "Enter intern's school: ",
            name: "school"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = data.id
            const email = data.email
            const school = data.school
            const teamMember = new Intern(name, id, email, school)
            team.push(teamMember)
            addTeamMembers()
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
    console.log("//////////You've done it!!! Now give your team a raise.////////")

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
    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
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
                <h2><i class="far fa-user">${team[i].getRole()}</h2>
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
    