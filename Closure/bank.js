function bank() {
    let balance = 1000;

    return function () {
        balance += 100;
        console.log(balance);
    };
}

const deposit = bank();
deposit();
deposit();