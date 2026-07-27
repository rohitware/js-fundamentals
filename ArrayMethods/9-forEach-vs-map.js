
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(number => console.log(number * 2));



const double = numbers.map(num => num * 2);
console.log(double);

const user = [
    { name: 'Raja', age: 23 },
    { name: 'Rahul', age: 10 },
    { name: 'Sandeep', age: 20 },
    { name: 'Amol', age: 50 },
    { name: 'Ramesh', age: 60 },
    { name: 'Suresh', age: 11 }
];

const adults = user.filter(user => user.age >= 18);
console.log(adults);

// means in forEach we can not return any value but in map and filter we can return the value.