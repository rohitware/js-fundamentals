function outer() {
    let name = "Rohit";

    function inner() {
        console.log(name);
    }
    inner();
}
outer();