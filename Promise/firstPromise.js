const myPromise = new Promise(function (reslove, reject) {
    let success = true;

    if (success) {
        reslove("task completed");
    }
    else {
        reject("Task failed");
    }
});

myPromise
    .then(function (result) {
        console.log(result);

    })
    .catch(function (error) {
        console.log(error);

    })