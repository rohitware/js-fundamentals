const person = {
    name: "Rohit",
    age: 37,
    isDeveloper: true,
    hobbies: ["coading", "music"],
}
console.log(person);

// accessing object values Dot Notation
console.log(person.name);
console.log(person.age);
console.log(person.isDeveloper);
console.log(person.hobbies);


// bracket notation
console.log(person["name"]);
console.log(person["age"]);

// adding new propeties
person.country = "India";
console.log(person.country);

// updating prorerties
person.age = 38;
console.log(person.age);

// deleting properties
delete person.hobbies;
console.log(person);
