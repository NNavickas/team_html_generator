// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email) {
    super(name, id, email)
    }
} 



var person = new Engineer("natalie", 16, "natalie@hello");
console.log(person.name);
console.log(person);
console.log(person.getName());