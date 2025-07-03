  let car = {
  brand: "Tesla",
  getBrand: function() {
    return this.brand;
  }
};

let boundGetBrand = car.getBrand.bind(car);  /// Here it is permanently setting the this context to the car object

console.log(boundGetBrand());  
console.log(boundGetBrand());  






