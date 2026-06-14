const person = { name: "Rohit", age: 33 }

// city dosent exist use default

const { name, age, city = "Pune" } = person;

console.log(city);
