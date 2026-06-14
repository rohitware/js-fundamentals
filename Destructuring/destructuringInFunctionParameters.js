// Without destructuring
function greet(person) {
    console.log(`Hello ${person.name}, age ${person.age}`);
}

// With destructuring 
function greet({ name, age }) {
    console.log(`Hello ${name}, age ${age}`);
}

greet({ name: "Rohit", age: 25 });
// Hello Rohit, age 25