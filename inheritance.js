// Parent Class Aka. Super Class
class Animal {
    constructor(eyes, limbs, mouth, ears, fur) {
            this.eyes = eyes
            this.limbs = limbs
            this.mouth = mouth
            this.ears = ears
            this.fur = fur
    }

    eat() {
        console.log('yum yum yum')
    }

    drink() {
        console.log('slurrp')
    }

    makeSound(sound) {
        console.log(sound)
    }
}

// instantiate Animal Class
// const dog = new Animal(2, 4, 1, 2, true)
// console.log(dog)
// console.log(dog.eyes)
// dog.drink()
// dog.eat()
// dog.makeSound('woof')

//INHERITANCE (SUB CLASS)
// we use special key word 'extends' to inherit from a parent
// this class immediately becomes the child class Aka. subclass
class Cat extends Animal {
    constructor(eyes, limbs, mouth, ears, fur) {     // only use constructor for subclass if you want to add too it ONLY!!!
        // super() calls on the parent class aka the superclass. super() is calling on the parent's constructor method
        super(eyes, limbs, mouth, ears, fur) 
    }

    scratchFurniture() {
        console.log('scratch scratch scratch')
    }

    // method overiding
    drink() {
        console.log('sip sip sip')
    }
}

const tommy = new Cat(4, 4, 1, 2, true)
console.log(tommy)
 tommy.eat()
 tommy.drink()

// tommy.scratchFurniture()
// dog.scratchFurniture() //typer error

// POLYMORPHISM: provides a way to perform a single action in different forms.
// Typical polymorphism behaviors are method ovveriding and (javascript doesnt support)method overloading. 