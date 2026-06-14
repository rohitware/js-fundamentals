const person = {
    name: "Rohit",
    address: {
        city: "Pune",
        pin: 411001
    }
};

// Destructure nested object

const { name, address: { city, pin } } = person;
console.log(name);
console.log(city);
console.log(pin);


