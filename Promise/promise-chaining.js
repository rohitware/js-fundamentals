function getUser() {
    return new Promise(resolve => {
        setTimeout(() => resolve({ id: 1, name: "Rohit" }), 1000);
    });
}

function getOrders(userId) {
    return new Promise(resolve => {
        setTimeout(() => resolve(["Order1", "Order2"]), 1000);
    });
}

function getDetails(order) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Details of ${order}`), 1000);
    });
}

// Clean chain! ✅ vs callback hell ❌
getUser()
    .then(user => {
        console.log(`User: ${user.name}`);
        return getOrders(user.id); // return next promise
    })
    .then(orders => {
        console.log(`Orders: ${orders}`);
        return getDetails(orders[0]); // return next promise
    })
    .then(details => {
        console.log(`Details: ${details}`);
    })
    .catch(error => {
        console.log(`Error: ${error}`); // catches ANY error!
    });

// Output (each after 1 second):
// User: Rohit
// Orders: Order1, Order2
// Details: Details of Order1