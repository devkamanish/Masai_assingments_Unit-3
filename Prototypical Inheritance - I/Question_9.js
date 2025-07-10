

function Person(name , age){
    this.name  = name
    this.age = age
}




Person.prototype.introduce = function(){
    console.log(`hi my name is ${this.name} and I am ${this.age} years old.`)
}

function Employee(name ,age,jobTitle){
    Person.call(this,name,age);
    this.jobTitle = jobTitle;

}
 Employee.prototype = Object.create(Person.prototype);            //Inherit Person.prototype methods

Employee.prototype.constructor = Employee;                         //Fix constructor pointer

Employee.prototype.work = function(){                                // Add work method to Employee.prototype

    console.log(`${this.name} is working as a ${this.jobTitle}`)
}



let per1 = new Person("Manish Devka" ,23);
let emp1 = new Employee("Manish",24 , "Frontend Developer")

per1.introduce()
emp1.introduce()

emp1.work()  



