// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "Please enter a project title.",
    name: "title"
},
{
    type: "input",
    message: "Please enter a short description of your project.",
    name: "description"
},
{
    type: "input",
    message: "Please enter installation instructions.",
    name: "install"
},
{
    type: "input",
    message: "Please enter usage information.",
    name: "usage"
},
{
    type: "input",
    message: "Please enter contribution guidelines.",
    name: "contribution"
},
{
    type: "input",
    message: "Please enter test instructions.",
    name: "test"
},
{
    type: "list",
    message: "What license would you like to use?",
    name: "license",
    choices: [{
        name: "MIT",
        value: ["[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", "mit", "MIT"]
    },
    {
        name: "Apache 2.0",
        value: ["[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)", "apache-2.0", "Apache 2.0"]
    },
    {
        name: "Mozilla Public 2.0",
        value: ["[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)", "mpl-2.0", "Mozilla Public License 2.0"]
    },
    {
        name: "GNU Gplv3",
        value: ["[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)", "gpl-3.0", "GNU General Public License 3.0"]
    },
    {
        name: "None",
        value: ""
    }],
},
{
    type: "input",
    message: "Please enter your github username.",
    name: "userName"
},
{
    type: "input",
    message: "Please enter your email.",
    name: "email"
},];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success!')
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            writeToFile("README.md", generateMarkdown(response))
        })
}

// Function call to initialize app
init();
