

import Member from "./Member.js"

function  PremiumMember(name){
  Member.call(this,name);  // here it is inheriting from Member 
  this.specialCollectionAccess = true;

}

PremiumMember.prototype = Object.create(Member.prototype);  // Without this line, PremiumMember would not inherit any methods from Member.

PremiumMember.prototype.constructor = PremiumMember;


PremiumMember.prototype.borrowBook = function(book){
    if(this.borrowedBooks.length>=5){
        console.log(`${this.name} cannot borrow more than 5 books.`)
        return ;

    }
    // use call to reuse Member's method
   Member.prototype.borrowBook.call(this,book)
}


export default PremiumMember;