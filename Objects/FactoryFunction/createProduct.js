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