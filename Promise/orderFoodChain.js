function orderFood() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Pizza ordered");

        }, 2000);
    });
}

orderFood()

    .then(result => {
        console.log(result);
        return ("Pizza coocking");
    })

    .then(result => {
        console.log(result);
        return ("Pizza delivered");
    })

    .then(result => {
        console.log(result);

    })