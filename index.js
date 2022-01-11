// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
// const questions = [description, installation, usage, license, contributing, tests, questions];

const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter a title for your project"
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description for your project"
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter any installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter any usage instructions"
    },
    {
        type: "list",
        name: "license",
        message: "Please choose a license",
        choices: ["MIT", "Apache", "Mozilla", "None"],
    },
    {
        type: "input",
        name: "contributing",
        message: "Please input any contributing members"
    },
    {
        type: "input",
        name: "test",
        message: "Please enter test information"
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your github username"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if (err) {
            console.log(err);
        }
        else {
            console.log("Successfully generated Readme")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        var readMeAnswers = generateMarkdown(answers);
        writeToFile("README.md", readMeAnswers);
    });
};

// Function call to initialize app
init();
