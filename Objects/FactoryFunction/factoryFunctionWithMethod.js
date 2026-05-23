function createUser(name, age) {
    return {
        name: name,
        age: age,

        greet() {
            console.log(`Hello, ${name}  you are ${age} years old`);

        }
    };
}

const user = createUser("Sachin", 33);

user.greet();



// Using this in Factory Function
function createUser1(name, age) {
    return {
        name: name,
        age: age,
        greet() {
            console.log(`Hello ${this.name}`);
        }
    };
}
const user3 = createUser1("Harshal", 30);
user3.greet();