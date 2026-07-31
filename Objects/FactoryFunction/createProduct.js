function createProduct(name, price) {
    return {
        name: name,
        price: price,

        showPrice() {
            console.log(`The product is ${name} and price is ${price}`);
        }
    };
}
const product1 = createProduct("laptop", 80000);
const product2 = createProduct("Mobile", 40000);

product1.showPrice();
product2.showPrice();

// Example 2: User Factory Function
function createUser(firstName, lastName, email) {
    return {
        firstName: firstName,
        lastName: lastName,
        email: email,
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
        displayInfo() {
            console.log(`${this.fullName()} - ${this.email}`);
        }
    };
}

const user1 = createUser("John", "Doe", "john@example.com");
const user2 = createUser("Jane", "Smith", "jane@example.com");

user1.displayInfo();
user2.displayInfo();

// Example 3: Car Factory Function
function createCar(brand, model, year) {
    return {
        brand: brand,
        model: model,
        year: year,
        age() {
            return new Date().getFullYear() - this.year;
        },
        description() {
            return `${this.year} ${this.brand} ${this.model} (${this.age()} years old)`;
        }
    };
}

const car1 = createCar("Toyota", "Camry", 2020);
const car2 = createCar("Honda", "Civic", 2022);

console.log(car1.description());
console.log(car2.description());

// Example 4: Book Factory Function with State Management
function createBook(title, author, pages, isRead = false) {
    return {
        title: title,
        author: author,
        pages: pages,
        isRead: isRead,
        markAsRead() {
            this.isRead = true;
            console.log(`"${this.title}" marked as read`);
        },
        getStatus() {
            return `${this.title} by ${this.author} - ${this.isRead ? "Read" : "Not Read"}`;
        }
    };
}

const book1 = createBook("JavaScript Basics", "John Smith", 350);
const book2 = createBook("Web Development", "Jane Doe", 420, true);

console.log(book1.getStatus());
book1.markAsRead();
console.log(book1.getStatus());
console.log(book2.getStatus());