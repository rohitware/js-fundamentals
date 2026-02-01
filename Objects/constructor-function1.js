function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}
const p1 = new Person("Balaji", "sare", 30);
const p2 = new Person("john", "doe", 33);
console.log(`${p1.firstName} ${p1.lastName} is ${p1.age} years old `);
console.log(`${p2.firstName} ${p2.lastName} is ${p2.age} years old `);