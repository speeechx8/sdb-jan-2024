class Person {
    constructor(name) {
        this.name = name;

        this.age;
        this.height;
        this.weight;
    }

    speak() {
        console.log(`Hi, my name is ${this.name}.`);
    }
}

let john = new Person("John");
console.log(john.name);

let stacy = new Person("Stacy");
console.log(john, stacy);

john.speak();
stacy.speak();

class Circle {
    // factory method
    static fromDiameter(diameter) {
        return new Circle(diameter / 2);
    }

    static fromArea(area) {
        return new Circle(Math.sqrt(area / Math.PI));
    }

    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    get circumference() {
        return 2 * (this.radius * Math.PI);
    }

    get area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

let c1 = new Circle(4);
console.log(`Circle diameter is: ${c1.diameter}`);
console.log(`Circle circumference is: ${c1.circumference}`);
console.log(`Circle area is: ${c1.area}`);

class Fruit {
    constructor(color, shape, taste) {
        this.color = color;
        this.shape = shape;
        this.taste = taste;
    }

    splat() {
        console.log("Your fruit is now on the floor. You monster.");
    }
}

class Tomato extends Fruit {
    constructor (ripeness) {
        super("red", "round", "mild");
        this.ripeness = ripeness;
    }
}

class Banana extends Fruit {
    constructor(peelability) {
        super("yellow", "curved", "mild");
        if (typeof peelability === "number") {
            this.peelability = peelability;
        }
        else {
            throw new TypeError("Banana peelability must be a number!");
        }
        
    }

    brown() {
        this.color = "brown";
    }
}

let myTomato = new Tomato("overripe");
let yourTomato = new Tomato("underripe");

yourTomato.color = "green";

console.log(myTomato, yourTomato);
myTomato.splat();

let myBanana = new Banana(1);
// let alsoMyBanana = new Banana();
console.log(myBanana);
myBanana.brown();
console.log(myBanana);

// factory function
function circleFromDiameter(diameter) {
    return new Circle(diameter / 2);
}

let c3 = circleFromDiameter(12);

let c4 = Circle.fromDiameter(9);

let c5 = Circle.fromArea(50);
console.log(c5);