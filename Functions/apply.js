const person = {
    firstName: "Kiran",
    lastName: "Patil",
    fullName: function (city, country) {
        console.log(this.firstName + " " + this.lastName + ", " + city + ", " + country);
    }

}

const person1 = {
    firstName: "Rohit",
    lastName: "Ware",
}
person.fullName("Mumbai", "India");
person.fullName.apply(person1, ["pune", "India"]);