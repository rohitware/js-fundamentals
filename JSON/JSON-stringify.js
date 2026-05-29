//Converts a JavaScript object/array into a JSON string.

const user = {
    name: "Amar",
    age: 20,
    isActive: true,
}
console.log(typeof user);

console.log(user);


const str = JSON.stringify(user);
console.log(typeof str);

console.log(str);
