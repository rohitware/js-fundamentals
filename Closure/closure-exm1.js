var global_variable = 100;

function outer_fun() {
    let local_variable = 200;
    let inner_fun = function () {
        let own_variabe = 300;
        console.log(`Global variable`, global_variable);
        console.log(`Local variable`, local_variable);
        console.log(`Own variable`, own_variabe);
    }
    return inner_fun;
}
let inner = outer_fun();
inner();