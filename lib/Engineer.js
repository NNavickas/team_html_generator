// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) { 
    super(name, id, email);
    // above, these are the same, as we always want them presented in the same order
    this.github = github;
    }

getGithub() {
    return this.github;
}
getRole() {
    return "Engineer";
  }
} 

module.exports = Engineer;