const p1 = Promise.resolve(`HTML`);

const p2 = Promise.reject(`CSS Failed`);

const p3 = Promise.resolve(`javaScript`);

Promise.allSettled([p1, p2, p3])

    .then(result => {
        console.log(result);
    })

    .catch(error => {
        console.log(error);
    })

//Promise.allSettled does not fail if ANY promise fails