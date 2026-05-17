function login(userName, password) {
    return new Promise((resolve, reject) => {
        if (password == 1234) {
            resolve(userName + " loged in");
        } else {
            reject("Invalid Password");
        }
    });
}
login("Rohit", 1234)
    .then(res => console.log(res))
    .catch(err => console.log(err));