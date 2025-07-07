
async function fetchData() {
    try{
     let res = await fetch("https://fakestoreapi.com/products") // using fetch to talk with the server
     let data = await res.json();       // using .json() to convert the response object into the readable js object
     console.log(data);
     let sumOfPrice = data.reduce((acc,num)=>{  // using reduce method to find the total price of all the products
          return acc + num.price
     },0)

     console.log(sumOfPrice)
    }
    catch(err){
        console.log("Failed to fetch products. Please try again later")
    }
      
}


fetchData()   // calling the function 