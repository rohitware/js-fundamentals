function User(name, age) {
    this.userName = name;
    this.userAge = age;
}
const u1 = new User("Amar", 30);
const u2 = new User("Raghu", 33);

console.log(u1.userName, u1.userAge);

console.log(u2.userName, u2.userAge);

