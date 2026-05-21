const user = {
    name: "Rohit",

    // greet: function () {
    //     console.log("Hello ", this.name);
    // }

    greet() {
        console.log("Hello ", this.name);

    }
}
user.greet();