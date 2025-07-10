


function Animal(){

    this.type = "Animal"

}

Animal.prototype.sound = function(){
    console.log("Animal sound")
}

function Dog(){                 // Here we are inheriting from Animal function
    Animal.call(this)
}



Dog.prototype = Object.create(Animal.prototype) ;

Dog.prototype.sound = function(){   //  Overriding the sound method in Dog.prototype
    console.log("Bark")
}  

const myDog = new Dog();    // creating an instance of Dog
myDog.sound()

