




// function greet(time,signn){
//   console.log(this.user, time,signn);
// }

// let obj = {
//   user : "raju"
// }

// let obj2 = {
//   user : "manuu"
// }
// let obj3 = {
//   user : "cheten"
// }


// greet.call(obj,"good morning","!!")
// greet.apply(obj,['good morning',"!!"])





console.log("Start");

setTimeout(() => {
  console.log("Task from setTimeout");
}, 2000);

Promise.resolve().then(() => {
  console.log("Task from Promise");
});

console.log("End");

