class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello ${this.name} you are ${this.age} years old`);
    }
}
const user1 = new User("Samir", 23);

user1.greet();
