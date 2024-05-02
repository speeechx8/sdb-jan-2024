let myPromise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        console.log("Delayed for 3 seconds.");
        resolve();
        // reject();
    }, 3000);
});

console.log(1);

myPromise.then(() => {
    console.log("Promise fulfilled.");
},
() => {
    console.log("Promised rejected.");
});

setTimeout(() => {
    console.log(2);
}, 500);

console.log(3);