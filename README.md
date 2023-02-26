# Team HTML Generator

## Project Description: 

A CLI app to create a single-page HTML, using node.js and conducting tests via Jest.

The output is a webpage which renders all the employees on a managers team, which are input by the manager. This allows all the teammates to be able to find eachother's contact details quickly.

Click the link below to see a demo of the app's functionality.

[Demo Video]()

## Table of Contents: 
- [Installation](#installation)
- [Usage](#usage)
- [Licensing](#license)
- [Contributions](#contributing-to-this-repo)
- [Tests](#testing)
- [Questions](#questions)

## Installation

To install the necessary dependencies, run the following commands:

``` npm i inquirer@6.5.0 ```

``` npm i jest --save-dev```

## Usage

You can run this application using command: 

``` node index.js ```

The structure of the README is found in the page-template.js file. Make any alterations you'd like, to ensure the displays matches questions and contact info you need for your team.
Once you create your file, it will be generated as the generateTeam.html for you to use.

## Contributing to this Repo

In order to contribute, please fork and create a pull request.

## Testing

There are tests, constructed using Jest, for each employee type.

To test, run the following command, followed by directory of the employee type you wish to test i.e. .\Manager.test.js:

``` npm test ```

## Questions

I hope you find this useful. If you have any questions or suggestions about the repo, open an issue or contact me directly at natalienavickas@hotmail.com. 

You can find more of my work at [NNavickas](https://github.com/NNavickas)
