# Team-Profile-Generator
## v1.0.0

[![License: MIT](https://img.shields.io/github/license/tiffany-brand/professional-README-generator?style=plastic)](./LICENSE)


## Description

This is a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. Because testing is key to making code maintainable, valid unit tests are written for each part of the code.


## Table of Contents

* [Description](#description)
* [Acceptance Criteria](#AcceptanceCriteria)
* [Demonstration](#demonstration)
* [Technologies](#technologies)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#Unittests)
* [License](#license)
* [Questions](#questions)


### Acceptance Criteria

*  GIVEN a command-line application that accepts user input
    1. WHEN I am prompted for my team members and their information
        THEN an HTML file is generated that displays a nicely formatted team roster based on user input
    2. WHEN I click on an email address in the HTML
        THEN my default email program opens and populates the TO field of the email with the address
    3. WHEN I click on the GitHub username
        THEN that GitHub profile opens in a new tab (depends on users choice whether to openin a new tab or not)
    4. WHEN I start the application
        THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
    5. WHEN I enter the team manager’s name, employee ID, email address, and office number
        THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
    6. WHEN I select the engineer option
        THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
    7. WHEN I select the intern option
        THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
    8. WHEN I decide to finish building my team
        THEN I exit the application, and the HTML is generated in the output( dist)  folder


### Demonstration

Demo video: [Team Profile Generator Demo](https://drive.google.com/file/d/1UjqaENPhlYIMao5IW-FpiURSwRQk2Zpt/view)

![promtps](./images/prompts.png)

### Output HTML file
![Output HTML page](./images/generatedREADME.png)


## Technologies

* [Node.js](https://nodejs.org/)
* [Inquirer.js](https://www.npmjs.com/package/inquirer)
* [Jest](https://jestjs.io/)

## Installation

To install dependencies, run the following:

      npm init
      npm install inquirer
      npm install jest --save-dev 


## Usage

After installing the dependencies, run the application with 

      node index.js

## UnitTests

Run the following command in the terminal  

    npm run test
      

## License

This repository is licensed under the [MIT license](./LICENSE).


## Questions

For any questions about the project/repository please contact me @ [archana.nagaraj@gmail.com](mailto:archana.nagaraj@gmail.com) </br>
GitHub @ [archana-nagaraj](https://github.com/archana-nagaraj) 
