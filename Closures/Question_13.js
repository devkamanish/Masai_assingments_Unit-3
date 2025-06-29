

function createBankAccount(){

    let balance = 0;
    return {
        deposit : function(amount){
            balance += amount;
            console.log(balance)
        },
        withdraw : function (amount){
            if(amount > balance){
                console.log("Insufficient funds")
            }else{
                balance -= amount;
                console.log(balance)
            }
        },
        getBalance : function(){
            console.log(balance);
        }
    }
}


let fn = createBankAccount();
fn.deposit(100)
fn.withdraw(30)
fn.getBalance()
