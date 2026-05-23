function createUser(name, age) {
    return {
        name: name,
        age: age
    };
}
const user1 = createUser("Rohit", 24);

const user2 = createUser("Amar", 33);

const user3 = createUser("Ravi", 32);

console.log(user1);
console.log(user2);
console.log(user3);
