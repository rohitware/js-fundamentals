function greet(firstName, lastName = "") {
    if (lastName == "") {
        return `hello ${firstName}`
    } else {
        return `hello ${firstName} , ${lastName}`
    }
}
console.log(greet("Rohit"));
console.log(greet("Rohit", "ware"));




function show(firstName, lastName = "") {
    return lastName ? `Hello ${firstName} ${lastName}` : `Hello ${firstName} `;
}
console.log(show("Rohit"));
console.log(show("Rohit", "ware"));
