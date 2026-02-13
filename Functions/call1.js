const person1 = {
    name: "John",
    greating: function (para) {
        console.log(`${para} ${this.name}`);

    }
}

const person2 = { name: "Ron" }

const person3 = { name: "Vicky" }


let msg = person1.greating.bind(person3, "hi");
person1.greating.call(person2, "hello");
person1.greating.call(person1, "hiiiiii");

msg();
