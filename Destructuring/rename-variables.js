const person = { name: "Rohit", age: 33, city: "Pune" }

// Rename name → myName, age → myAge

const { name: myName, age: myAge, city: myCity } = person;

console.log(myName);
console.log(myAge);
console.log(myCity);
