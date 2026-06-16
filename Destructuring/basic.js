const person = {
    name: "Rohit",
    age: 33,
    city: "Pune"
};

// Destructuring

const { name, age, city } = person;

console.log(name);
console.log(age);
console.log(city);

// Challenge 1 — Object Destructuring
const movie = {
    title: "RRR",
    director: "Rajamouli",
    year: 2022,
    rating: 8.0
};
// Destructure and print:
// "RRR directed by Rajamouli in 2022 rated 8"

const { title, director, year, rating } = movie;
console.log(`${title} directed by ${director} in ${year} rated ${rating}`);
