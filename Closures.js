function outer() {
  let counter = 0;

  function inner() {
    counter++;
    console.log(counter);
  }

  return inner;
}

let fn = outer();
fn(); // 1
fn(); // 2



// 🔍 What’s Happening?
// outer() creates a local variable counter.

// inner() is defined inside outer(), so it has access to counter.

// Even after outer() finishes running, inner() still remembers counter because of closure.

// The variable counter stays in memory and keeps getting updated. 

// Use cases of closures:
// Data encapsulation (private variables)
// Callbacks & Event handlers
// setTimeout / setInterval
// Factory functions
// Currying


