const user = {
    name: "Raghu",
};

const details = {
    age: 23,
};

const finalUser = {
    ...user,
    ...details,
}
console.log(finalUser);
