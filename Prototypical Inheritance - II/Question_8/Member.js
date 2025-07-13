



function Member(name){
    this.name = name;
    this.borrowedBooks = [];
    
}

Member.prototype.borrowBook  = function(bookObj){

    if(this.borrowedBooks.length >=3){    // checking for user can only buy 3 books

        console.log(`${this.name}  cannot borrow books more than 3 books.`)
        return ;
    }
 
  if(bookObj.isAvailable){
    bookObj.isAvailable= false;
    this.borrowedBooks.push(bookObj.title);
    console.log(`${this.name} borrowed ${bookObj.title}`)
  }else{
    console.log(`The books is already borrowed`)
  }
  
}

export default Member;