class Animal {
    eat() {
        console.log("Eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Barking");
    }
}
const dog1 = new Dog();
dog1.eat();
dog1.bark();

