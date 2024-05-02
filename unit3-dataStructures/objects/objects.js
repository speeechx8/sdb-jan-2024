let john = {
    age: 27,
    height: 5,
    weight: 150,
    race: "white",
    ethnicity: "american",
    relationshipStatus: "single",
    class: "middle class",
    favActivity: "golfing",
    kids: ["Stacy", "John Jr"]

}

let carOfJohn = {
    make: "BMW",
    model: "Mini Cooper",
    color: "yellow",
    year: 2014,
    mileage: 110000
}

john.car = carOfJohn;
console.log(john);
console.log(john["age"]);

john.age += 1;
console.log(john.age);
carOfJohn.mileage += 2000;
console.log(john);

let keysToPrint = ["age", "weight", "height", "ethnicity", "race"]

console.log("\nLOOP!")
for (key in john) {
    if (keysToPrint.includes(key)) {
        console.log(key, john[key]);
    }
}

console.log(Object.keys(john))
console.log(Object.values(john))
console.log(Object.entries(john))

console.log("\n")
// Don't do this
let obj = {
    null: null,
    undefined: undefined,
    "": "",
    false: true,
    0: 23
}
console.log(obj)

delete obj.false;
delete obj[""];

john.weight = null;
console.log(john)