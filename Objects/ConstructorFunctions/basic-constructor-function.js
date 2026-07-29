function User(name, age) {
    this.name = name;
    this.age = age;
}

// creating instant
const user1 = new User("Kiran", 20);
const user2 = new User("Samir", 22);

console.log(user1);
console.log(user2);

// Another example: Product constructor
function Product(title, price, stock) {
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.getInfo = function () {
        return `${this.title} costs $${this.price} (${this.stock} in stock)`;
    };
}

const product1 = new Product("Laptop", 999, 5);
const product2 = new Product("Mouse", 25, 50);

console.log(product1.getInfo());
console.log(product2.getInfo());

