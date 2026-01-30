const user = {
    name: "Rohit",
    age: 20,
};
let text = user.name;
console.log(text);


const { name, age } = user;
console.log(name);


const car = {
    type: "fiat",
    model: 500,
    color: "White",
};
console.log(`the car is ${car.type} model is ${car.model} and color is ${car.color}`);


const { type, model, color } = car;
console.log(type, model, color);

