// 3 independent promises
const p1 = new Promise(resolve => {
    setTimeout(() => resolve("User data"), 1000);
});

const p2 = new Promise(resolve => {
    setTimeout(() => resolve("Order data"), 2000);
});

const p3 = new Promise(resolve => {
    setTimeout(() => resolve("Payment data"), 500);
});

// Wait for ALL three
Promise.all([p1, p2, p3])
    .then(results => {
        console.log(results);
        // ["User data", "Order data", "Payment data"]
    })
    .catch(error => {
        console.log(`Error: ${error}`);
    });

// Takes 2 seconds total (waits for LONGEST one)