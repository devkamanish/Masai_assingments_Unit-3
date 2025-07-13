

const parent ={
   greet : function(){
      console.log(`Hello from parent`)

   }
}

const child = Object.create(parent) ////  
child.greet = function(){
   console.log(`hello from child`)
}


child.greet()
