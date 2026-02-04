const person = {
    fullName: function (city, country) {
        console.log(this.firstName + " " + this.lastName + "," + city + "," + country);

    }
}
const person1 = {
    firstName: "Rohit",
    lastName: "Ware",
}

const person2 = {
    firstName: "Kiran",
    lastName: "Patil",
}
person.fullName.call(person1, "pune", "India");

person.fullName.call(person2, "Latur", "India");

