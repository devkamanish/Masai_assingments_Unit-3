  function deepClone(obj){
    let copy = JSON.parse(JSON.stringify(obj));
    copy.hobbies.push("singing")
    console.log(obj) // original object(obj)  remains unchanged 
    console.log(copy.hobbies) //  deep copied with a change in hobbies.

  }

  deepClone({ name: "Alice", hobbies: ["reading", "traveling"] });



  