const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const employees = [];
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.
inquirer
  .prompt([
    {
      //manager questions
      type: "input",
      message: "What is the team Manager's name?",
      name: "managerName",
    },
    {
      type: "input",
      message: "What is their employee ID?",
      name: "managerID",
    },
    {
      type: "input",
      message: "What is their email address?",
      name: "managerEmail",
    },
    {
      type: "input",
      message: "What is their office number?",
      name: "managerOffice",
    },
  ])
  .then((response) => {
    // populate manager info
    const { managerName, managerID, managerEmail, managerOffice } = response;
    const manager = new Manager(
      managerName,
      managerID,
      managerEmail,
      managerOffice
    );
    // push to array
    employees.push(manager);
    // prompt for next action
    promptForNextEmployee();
  });

const promptForNextEmployee = () => {
  inquirer
    .prompt([
      {
        // choice of 3
        type: "list",
        message: "What do you need to do next?",
        name: "employeeType",
        choices: [
          "Add an Engineer",
          "Add an Intern",
          "Finish building the team",
        ],
      },
    ])
    .then((response) => {
      if (response.employeeType === "Add an Engineer") {
        promptForEngineer();
      } else if (response.employeeType === "Add an Intern") {
        promptForIntern();
      } else {
        buildPage();
      }
      //    use the functionality from page-template to generate the team
    });
};

const promptForEngineer = () => {
  inquirer
    .prompt([
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
    ])
    .then((response) => {
      // declare variables
      const { engineerName, engineerID, engineerEmail, engineerGit } = response;
      const engineer = new Engineer(
        engineerName,
        engineerID,
        engineerEmail,
        engineerGit
      );

      // push inputs to the array
      employees.push(engineer);

      // prompt for next action
      promptForNextEmployee();
    });
};

const promptForIntern = () => {
  inquirer
    .prompt([
      {
        //intern questions
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
        message: "What is the name of their school?",
        name: "internSchool",
      },
    ])
    .then((response) => {
      // add new intern to employees array
      // declare variables
      const { internName, internID, internEmail, internSchool } = response;
      const intern = new Intern(
        internName,
        internID,
        internEmail,
        internSchool
      );
      // push inputs to array
      employees.push(intern);
      // prompt for next action
      promptForNextEmployee();
    });
};

// write the HTML
const buildPage = () => {
    const html = render(employees);

    fs.writeFile(outputPath, html, (err) => {
        err ? console.error(err) : console.log("Your HTML has been generated");
    });
  };
