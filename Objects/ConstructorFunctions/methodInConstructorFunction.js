function Person(name, age) {
    this.name = name;
    this.age = age;
}
// method added to prototype

Person.prototype.city = "Bangalore";

Person.prototype.greet = function () {
    console.log(`Hello i M ${this.name} from ${this.city}`);
}

Person.prototype.showAge = function () {
    console.log(`Hello im ${this.name} and my age is ${this.age}`);
}

const person1 = new Person("KK", 44);
const person2 = new Person("shan", 45);

console.log(person1);
person1.greet();
person1.showAge();

console.log(person2);
person2.greet();
person2.showAge();

console.log(person1.hasOwnProperty("name")); // true

console.log(person1.hasOwnProperty("city")); // false

console.log(person1.city); // Bangalore