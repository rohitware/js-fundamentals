function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}
function sayBye() {
    console.log("Bye Bye");

}

// function processUser(callback) {
//     callback("Rohit", sayBye)
// }
greet("Rohit", sayBye)