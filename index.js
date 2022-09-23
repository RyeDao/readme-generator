// TODO: Include packages needed for this application
const generateMarkdown = require('./generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide step-by-step instructions for your project."
    },
    {
        type: "input",
        name: "description",
        message:"Please write a description of your project."
    },
    {
        type: "input",
        name: "usage",
        message:"How does this app work?"
    },
    {
        type: "input",
        name: "test",
        message:"How do you test your app?"
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ['agpl', 'apache', 'mit', 'no license']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquireResponses) => {
        console.log("File created!");
        writeToFile("README.md", generateMarkdown({...inquireResponses}))
    })
}

// Function call to initialize app
init();
