function bankAccount(){
  let balance = 0;

  return {
    deposit : function(amount){
        balance += amount;

    },
    withdraw : function(amount){
        if(amount > balance){ // check if withdrawal amount is greater than balance
            console.log("Insufficient funds");  
        }else {
            balance -= amount ;
            console.log(balance)
      }
    },
    getBalance : function(){
        console.log(balance)
      },

    reset : function(){ 
        balance = 0;
        console.log("Balance reset to zero");
      }      
  }
}

let fn = bankAccount();
fn.deposit(100);
fn.getBalance(); // 100
fn.reset()
fn.getBalance(); // 0