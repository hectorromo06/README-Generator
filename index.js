// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const generateReadMe = require('./src/js/')

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project? (Required)',
    validate: titleInput => {
        if (titleInput) {
            return true;
        } else {
            console.log('Please enter a project title!');
            return false;
        }
    }
}, {
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project: (Required)',
    validate: descriptionInput => {
        if (descriptionInput) {
            return true;
        } else {
            console.log('Please provide a description of the project!');
            return false;
        }
    }
}, {
    type: 'confirm',
    name: 'confirmInstallInst',
    message: 'Would you like to provide installation instructions?',
    default: true
}, {
    type: 'input',
    name: 'installInst',
    message: 'Provide installation instructions for your application:',
    when: ({
        confirmInstallInst
    }) => {
        if (confirmInstallInst) {
            return true;
        } else {
            return false;
        }
    }
}, {
    type: 'confirm',
    name: 'confirmUsage',
    message: 'Would you like to provide usage information?',
    default: true
}, {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information for your application:',
    when: ({
        confirmUsage
    }) => {
        if (confirmUsage) {
            return true;
        } else {
            return false;
        }
    }
}, {
    type: 'confirm',
    name: 'confirmContribution',
    message: 'Would you like to provide contribution guidelines?',
    default: true
}, {
    type: 'input',
    name: 'contribution',
    message: 'Provide contribution guidelines for your application:',
    when: ({
        confirmContribution
    }) => {
        if (confirmContribution) {
            return true;
        } else {
            return false;
        }
    }
}, {
    type: 'confirm',
    name: 'confirmTest',
    message: 'Would you like to provide test instructions?',
    default: true
}, {
    type: 'input',
    name: 'test',
    message: 'Provide test instructions for your application:',
    when: ({
        confirmTest
    }) => {
        if (confirmTest) {
            return true;
        } else {
            return false;
        }
    }
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    return inquirer
        .prompt(questions)
};

// Function call to initialize app
init()
    .then(resp => {
        console.log(resp);
    });