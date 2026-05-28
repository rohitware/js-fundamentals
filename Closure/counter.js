function outer() {
    let count = 6;

    return {
        increment() {
            count++;
            console.log(count);

        },

        decrement() {
            count--;
            console.log(count);

        },

        multiplication(num) {
            count = count * num;
            console.log(count);

        }

    };
}
const result = outer();
result.increment();
result.decrement();
result.multiplication(5);
