   

   let user = {
    username : "Manish",
   ShowUsername : function(){
        console.log(this.username)
    }
   }


   function logUername(){
    console.log(this.username)
   }

   user.ShowUsername();
   logUername()  // here logUsername is a standalone function not attached to any object so this refers to the global object and no 'username' is defined globally so it is printing undefined.


   // But we can use the call method to explicitly set the value of this when invoking a function.
   logUername.call(user)