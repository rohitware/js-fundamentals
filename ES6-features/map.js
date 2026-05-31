// creat empty map

const fruits = new Map();

// set map values

fruits.set("apples", 2000);
fruits.set("bananas", 1000);
fruits.set("oranges", 3000);

console.log(fruits);

// pass array to new Map()

const fruits1 = new Map([
    ["Apples", 2000],
    ["banana", 1000],
    ["oranges", 3000]

]);
console.log(fruits1);


// adding map value
fruits.set("mangos", 4000);
console.log(fruits);

// changing the map values
fruits1.set("Apple", 5000);
console.log(fruits1);

// get value
let val = fruits.get("apples");    // Returns 500
console.log(val);

// Returns object:
console.log(typeof fruits);
