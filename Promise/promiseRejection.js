const promiss = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Something went wrong!");
    }, 2000);
});
promiss
    .then(result => console.log(result))
    .catch(error => console.log(error))