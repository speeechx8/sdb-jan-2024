// same as regular way to declare function
let addStrLengths = (str1, str2) => {
    return str1.length + str2.length;
};

console.log(addStrLengths("What", "1"));
console.log(typeof addStrLengths);

let arr = ["hi", "hello", "goodbye"];

// only want to call function once
arr.forEach((element) => {
    console.log(element);
});

let arr2 = arr.map((element) => element[0]);

console.log(arr2);

console.log("-------------");
function forEachFun(element) {
    console.log(element);
}

arr.forEach(forEachFun);
// able to be accessed after we are done with the function
console.log(forEachFun);