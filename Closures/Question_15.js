 function createCounter(){
    let count = 0;
   function counter(){
    console.log(count);
    count++;
  }

 counter.reset  = function(){
    count = 0;
    console.log("Counter reset to 0");  
 }

 return counter;
 
 }
 
let fn = createCounter();


fn()
fn()
fn()
fn.reset();
fn();
