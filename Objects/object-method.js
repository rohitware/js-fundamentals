const person = {
    firstName: "John",
    lastName: "doe",
    id: 11,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
console.log(person.fullName());
