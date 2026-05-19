function step1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Step 1 done");
        }, 500)
    });
}

function step2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("step 2 fail");
        }, 500);
    });
}

function step3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("step 3 done");
        }, 500);
    });
}
// ERROR PROPAGATION - catch catches ANY error in chain

step1()

    .then(result => {
        console.log(result);
        return step2()
    })
    .then(result => {
        console.log(result);
        return step3()
    })
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    })