 
 function processProducts(arr){
    let narr =  arr.map((ele,ind)=>{
      return   ele.name
      
    }) 
    
    arr.forEach((ele,)=>{
      if(ele.price  > 50  ){
        console.log(`${ele.name} is above $50`)
      }else{
        console.log(`${ele.name} is below $50`)

      }
    });

 }


 processProducts( [{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }]);


