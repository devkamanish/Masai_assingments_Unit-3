// 1. Car Constructor   
function Car(make, model, year, isAvailable = true) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isAvailable = isAvailable;
}

// 2. Customer Constructor
function Customer(name) {
    this.name = name;
    this.rentedCars = [];
}

// 3. Rent Car Method
Customer.prototype.rentCar = function (car) {
    if (car.isAvailable) {
        car.isAvailable = false;
        this.rentedCars.push(car);
        console.log(`${this.name} has rented ${car.make} ${car.model}`);
    } else {
        console.log(`${car.make} ${car.model} is already rented.`);
    }
};

// 4. PremiumCustomer Constructor
function PremiumCustomer(name, discountRate = 0.1) {
    Customer.call(this, name);
    this.discountRate = discountRate;
}
PremiumCustomer.prototype = Object.create(Customer.prototype);
PremiumCustomer.prototype.constructor = PremiumCustomer;

// 5. Rental Price Calculation
function calculateRentalPrice(carType, days, isPremium = false, discountRate = 0.1) {
    const basePrice = 50;
    const typeRates = {
        SUV: 1.5,
        Sedan: 1.2,
        Hatchback: 1.0
    };
    
    let price = basePrice * typeRates[carType] * days;
    if (isPremium) {
        price *= (1 - discountRate);
    }

    return price.toFixed(2);
}

// 6. Handle Returns
Customer.prototype.returnCar = function (car) {
    const index = this.rentedCars.indexOf(car);
    if (index > -1) {
        setTimeout(() => {
            car.isAvailable = true;
            this.rentedCars.splice(index, 1);
            console.log(`${this.name} has returned ${car.make} ${car.model}`);
        }, 2000); // 2 seconds delay
    } else {
        console.log(`${this.name} did not rent this car.`);
    }
};

// 7. Maintenance Function
function Maintenance(car, delay) {
    console.log(`Maintenance started for ${car.make} ${car.model}`);
    setTimeout(() => {
        car.isAvailable = true;
        console.log(`Maintenance completed for ${car.make} ${car.model}`);
    }, delay);
}

// 8. Demonstration
const car1 = new Car("Toyota", "Corolla", 2020);
const car2 = new Car("Hyundai", "Creta", 2022);
const car3 = new Car("Honda", "City", 2021);

const customer1 = new Customer("Alice");
const customer2 = new PremiumCustomer("Bob", 0.2);

// Renting cars
customer1.rentCar(car1); // Alice rents Corolla
customer2.rentCar(car2); // Bob rents Creta

// Trying to rent an unavailable car
customer1.rentCar(car2); // Already rented

// Returning car
customer1.returnCar(car1); // Alice returns Corolla (delayed)
customer2.returnCar(car2); // Bob returns Creta (delayed)

// Calculate price
console.log("Regular:", calculateRentalPrice("SUV", 3));
console.log("Premium:", calculateRentalPrice("SUV", 3, true, customer2.discountRate));

// Maintenance
Maintenance.call(null, car3, 3000);

// Using apply and bind
const logRent = function(car) {
    console.log(`${this.name} is trying to rent ${car.make} ${car.model}`);
};

logRent.call(customer1, car3);
logRent.apply(customer2, [car3]);

const boundLogRent = logRent.bind(customer1, car3);
boundLogRent();




