
  # L1 - Testing if you know Promises or not
 
 G drive Vedio link -> http://drive.google.com/file/d/131G4_4M_ui0W4W--JIlShiHdIVy5qSFC/view  

---

### 1️⃣ What are Promises and Why Do We Need Them

- Explain the concept of asynchronous behavior in JavaScript.
- Promises -> Promises are the objects that represent the eventual completion(or failure) of an aynchronous task. It acts as a placeholder for a value that is not yet available but will be in the future.
- because setTimeout  can only schedule tasks with fixed delays, it doesn’t know when the async task actually finishes.
- Promise states:
  - **Pending** 
  - **Resolved** (Fulfilled)
  - **Rejected**

  
---

### 2️⃣ How to Execute a Promise and Handle Resolve/Reject/Failure 

- Syntax of creating a Promise: 

  ```javascript
  const myPromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve("Data fetched successfully!");
    } else {
      reject("Error occurred while fetching data.");
    }
  });
 

 ```javascript
 myPromise
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });




### 3️⃣ What is callback Hell and How Promises Help 

// Using callbacks
getData1(() => {
  getData2(() => {
    getData3(() => {
      // deeply nested
    });
  });
});


Problembs with callback Hell :
Hard to debug
Difficult to maintain
Less readable


How promises resolve this: 
Flattent the code structure
Easy error handling
And also maintain the chainability


/// Using promises
getData1()
  .then(getData2)
  .then(getData3)
  .catch(error => console.log(error));

