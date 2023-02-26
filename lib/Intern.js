// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) { 
    super(name, id, email);
    // above, these are the same, as we always want them presented in the same order
    this.school = school;
    }

getSchool() {
    return this.school;
}
getRole() {
    return "Intern";
  }
} 

// var person = new Engineer("natalie", 16, "natalie@hello");
// console.log(person.name);
// console.log(person);
// console.log(person.getName());

module.exports = Intern;