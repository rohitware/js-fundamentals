// You have this object and function:
const car = { brand: "Toyota" };
function describe(color, year) {
    console.log(`${this.brand} is ${color}, made in ${year}`);
}

// describe() is a STANDALONE function
// it does NOT belong to car object
// car.describe → ❌ car has no describe function!

describe.call(car, "Black", 2021);

describe.apply(car, ["red", 2020]);

const bindFunction = describe.bind(car, "white", 2023);
bindFunction();
