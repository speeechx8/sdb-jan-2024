let dog = {
    name: "Fido",
    color: "brown",
    speak: () => {
        console.log("Bark!");
    },
    nameColor: function() {
        console.log(`${this.name} ${this.color}`)
    }
}

dog.speak();
dog.nameColor();