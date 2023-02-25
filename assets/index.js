const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
inquirer
    .prompt([
        { //manager questions
            type: "input",
            message: "What is the team Manager's name?",
            name: "manager_name",
        },
        {
            type: "input",
            message: "What is the team Manager's name?",
            name: "manager_id",
        },
        {
            type: "input",
            message: "What is the team Manager's name?",
            name: "manager_email",
        },
        {
            type: "input",
            message: "What is the team Manager's name?",
            name: "manager_office#",
        },   
    ]
)
.then(response => {
    // populate manager info
    // promptForNexEmployee ()
})

const promptForNextEmployee = () => {
    inquirer.prompt([
        { // choice of 3
            type: "list",
            message: "What do yo uneed to do next?",
            name: "employeeType",
            choices: [
              "Add an Engineer",
              "Add an Intern",
              "Finish building the team",
            ],
          },
    ]).then(response => {
        // if engineer
        //    promptForEngineer
        // else if intern
        //    promptForIntern
        // else
        //    use the functionality from page-template to generate the team
    })
}

const promptForEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Engineer's name?",
            name: "engineerName",
        }, 
        {
            type: "input",
            message: "What is their employee ID?",
            name: "engineerID",
        }, 
        {
            type: "input",
            message: "What is their email address?",
            name: "engineerEmail",
        }, 
        {
            type: "input",
            message: "What is the their GitHub username?",
            name: "engineerGit",
        }, 
        //engineer questions
    ]).then(response => {
        // add new engineer to employees array
        // promptForNextEmployee
    })
}

const promptForIntern = () => {
    inquirer.prompt([
        {   //intern questions
            type: "input",
            message: "What is the Intern's name?",
            name: "internName", // not sure the different nameing structure is necessary
        }, 
        {
            type: "input",
            message: "What is their employee ID?",
            name: "internID",
        }, 
        {
            type: "input",
            message: "What is their email address?",
            name: "internEmail",
        }, 
        {
            type: "input",
            message: "What is the their GitHub username?",
            name: "internGit",
        }, 
    ]).then(response => {
        // add new intern to employees array
        // promptForNextEmployee
    })
}

// I want to split this into a page-template.js file 
// oh wait, it's already done...wooohooo
const buildPage = () => {
// render(myArrayOfTeamMembers)
}

