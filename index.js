// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
        
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description'
    },
    {
        type: 'input',
        message: "What is your porject's Table of Contents?",
        name: 'tableOfContents'

    },
    {
        type: 'input',
        message: "What is your project's installation?",
        name: 'installation'
    },
    {
        type: 'input',
        message: "What is your project's usage?",
        name: 'usage'
    },
    {
        type: 'rawlist',
        message: "What is your project's license?",
        name: 'license',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
    },
    {
        type: 'input',
        message: "What is your project's contributing?",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "What is your project's tests?",
        name: 'tests'    
    },
    {
        type: 'input',
        message: "What is your project's questions?",
        name: 'questions'    
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) {
            throw err;
        }
        console.log('FILE SAVED');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(async (answers) => {
        let html = await generateMarkdown(answers);
        writeToFile('READMEGenerated.md', html);
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    }
    );}

// Function call to initialize app
init();
