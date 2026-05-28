function createAccount(InitialBalance) {
    let balance = InitialBalance;
    return {
        deposit: function (amount) {
            balance = balance + amount;
            console.log(`Deposit: ${amount} Balance: ${balance}`);

        },
        withdraw: function (amount) {
            if (amount > balance) {
                console.log(`Insufficient balance`);

            } else {
                balance = balance - amount;
                console.log(`Withdraw : ${amount} Balance: ${balance}`);

            }
        },
        getBalance: function () {
            console.log(`Balance : ${balance}`);

        }
    };
}
const myAccount = createAccount(4000);
myAccount.deposit(2000);
myAccount.withdraw(1000);
myAccount.withdraw(1000);
myAccount.getBalance();
