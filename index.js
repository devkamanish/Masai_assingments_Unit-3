 
//  let userPrompt = prompt("What do you wanna shop ? ")
 

 
fetch("https://fakestoreapi.com/products")
.then(res=>res.json())
.then(res=>{
  let cheap = res.filter(item=> item.price<20);
  console.log(cheap.length)
})

