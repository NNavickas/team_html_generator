// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) { 
    super(name, id, email, "Engineer");
    // above, these are the same, as we always want them presented in the same order
    this.github = github;
    }

getGithub() {
    return this.github;
}
} 



var person = new Engineer("natalie", 16, "natalie@hello");
console.log(person.name);
console.log(person);
console.log(person.getName());

module.exports = Engineer;