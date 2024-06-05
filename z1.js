class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    makeSound() {
        console.log("Animal sound");
    }
}


class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    bark() {
        console.log("Woof!");
    }
}


const animal = new Animal("Bob", 3);
const dog = new Dog("Buddy", 5, "Labrador");


animal.makeSound(); 
dog.makeSound();    
dog.bark();         