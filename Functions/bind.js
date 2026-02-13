const person1 = { name: "John" };
const person2 = { name: "Paul" };
const person3 = { name: "Ringo" };

function greet() {
    console.log(`Hello ${this.name}`);
}
const greetJohn = greet.bind(person1);
greetJohn();