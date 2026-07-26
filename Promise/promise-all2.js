function getUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("user retrieved");
        }, 1000);
    });
}

function getOrders() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("orders retrieved");
        }, 1000);
    });
}
function getProducts() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("products retrieved");
        }, 1000);
    });
}

Promise.all([getUser(), getOrders(), getProducts()])
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });