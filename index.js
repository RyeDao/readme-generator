// TODO: Include packages needed for this application
const generateMarkdown = require('generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title"
        message: "What is the title of your project"
    },
    {
        type: "input",
        name: "github"
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email"
        message: "What is your email address"
    },
    {
        type: "input",
        name: "installation"
        message: "Please provide step-by-step instructions for your project"
    },
    {
        type: "input",
        name: "description"
        message:"Please write a description of your project."
    },
    {
        type: "input",
        name: "usage"
        message:"How does this app work?"
    },
    {
        type: "input",
        name: "contribution"
        message:"Would you like to add any contributors?"
    },
    {
        type: "input",
        name: "tests"
        message:"How do you test your app?"
    },
    {
        type: "input",
        name: "questions"
        message:"How would you like to be contacted?"
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
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
