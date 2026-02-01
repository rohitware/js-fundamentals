class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`${this.name} is ${this.age} years old`);

    }
}
const u1 = new User("Rohit", 30);
const u2 = new User("Balaji", 28);
u1.greet();
u2.greet();
