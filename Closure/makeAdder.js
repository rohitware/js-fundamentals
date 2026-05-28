function makeAdder(x) {


    return function add(y) {
        const result = x + y;
        console.log(result);
        return result;

    };
}
const add5 = makeAdder(5);
const add10 = makeAdder(10);

add5(6);
add10(5);