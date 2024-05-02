let dog = {
    name: "Vega",
    sex: "female",
    breed: "princess",
    color: "toffee",
    age: 2,
    weight: 7,
    size: "small",
    speak: () => {
        console.log("Bark!");
    },
    get getDogYears() {
        return this.age * 7;
    }
}

dog.speak();
console.log(dog.getDogYears)
dog.age++;
console.log(dog.getDogYears)
