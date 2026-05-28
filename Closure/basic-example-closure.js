function outer() {
    let name = "Rohit";

    return function inner() {
        console.log(name);
    }

}
display = outer();
display();