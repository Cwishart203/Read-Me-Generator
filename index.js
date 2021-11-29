// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
// const questions = [description, installation, usage, license, contributing, tests, questions];
inquirer
    .prompt([
        {
            type: "input",
            name: "description",
            message: "Please enter a description"
        },
        {
            type: "input",
            name: "installation",
            message: "Please enter installation instructions"
        },
        {
            type: "input",
            name: "usage",
            message: "Please enter usage instructions"
        },
        {
            type: "list",
            name: "license",
            message: "Please choose a license"
        },
        {
            type: "input",
            name: "contributing",
            message: "Please input contributing members"
        },
        {
            type: "input",
            name: "test",
            message: "Please enter test information"
        }
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then((answers) => fs.writeFileSync('readme.md', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to readme.md'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
