const p1 = Promise.resolve(`HTML`);

const p2 = Promise.reject(`CSS Failed`);

const p3 = Promise.resolve(`javaScript`);

Promise.all([p1, p2, p3])

    .then(result => {
        console.log(result);
    })

    .catch(error => {
        console.log(error);
    })

//CSS Failed
//Promise.all fails if ANY promise fails