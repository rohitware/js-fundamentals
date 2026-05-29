// Old way 
const user = {
    name: "Raghu",
    age: 25,
    city: "Pune"
};
const oldName = user.name;
const oldAge = user.age;
console.log(oldName);

// es6 way
const { name, age, city } = user;
console.log(name);
console.log(age);
console.log(city);


//  Rename while destructuring
const { name: userName, age: userAge, city: userCity } = user;
console.log(userName, userAge, userCity);

