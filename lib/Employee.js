
// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) { // or whatever parameters are required
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
}



var person = new Employee("natalie", 16, "natalie@hello");
console.log(person.name);
console.log(person);
console.log(person.getName());

module.exports = Employee;
