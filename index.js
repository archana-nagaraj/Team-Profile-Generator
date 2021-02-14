// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { Console } = require('console');

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
            name: "employeeID"
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
                    displayTeam();
                    break;
            }
        });
};

    // function to display the added team in a html page
function displayTeam(){
    console.log("TBD display team")
}

    // Function call to initialize app
init();
    