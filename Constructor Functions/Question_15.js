

function createLibrary(){
    let books = [];
     return {
        
        addBook : function(add){
            books.push(add)
        },
        removebook : function(title){
        books  =  books.filter(book=> book.title !==title)
        },
        listbooks : function(){
          books.forEach(book=>book.details())
        }
     }
}



function Book(title , author){
  return {
   title : title,
   author : author,
   details : function(){
    console.log(`Title: ${title}, Author: ${author}`)
   }
   
  }
}


const library = createLibrary();

const book1 = Book("To Kill a Mockingbird", "Harper Lee");
const book2 = Book("1984", "George Orwell");

library.addBook(book1)
library.addBook(book2);

// library.listbooks()

library.removebook("1984")

library.listbooks()


