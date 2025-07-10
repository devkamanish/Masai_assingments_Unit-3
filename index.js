



let banckAccountFns = {
deposit(cash){
  this.balance += cash;

}
}
function createBanckAccount(name , balance){
   const user = Object.create(banckAccountFns);
   user.name = name,
   user.balance = balance
   return user
}



const user1 = createBanckAccount("Manish" , 2000)
const user2 = createBanckAccount("Dev" ,4000)

user1.deposit(1000)

console.log(user1)

console.log(user1.deposit === user2.deposit)



