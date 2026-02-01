function createUser(name, age) {
    return {
        name,
        age,
        great() {
            console.log(`Hello ${this.name} ${this.age}`);

        }
    };
}
const u1 = createUser("Rohit", 30)
u1.great();