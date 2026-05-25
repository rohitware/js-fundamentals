class Car {
    constructor(brand) {
        this.brand = brand;
    }
    start() {
        console.log(`${this.brand} started`);
    }

    stop() {
        console.log(`${this.brand} stoped`);
    }
}

const car1 = new Car("Matuti")
const car2 = new Car("TATA");

car1.start();
car2.start();

car1.stop();
car2.stop();
