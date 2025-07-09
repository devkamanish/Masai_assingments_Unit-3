

function createBook(title, author) {
  return {
    title: title,
    author: author,
    printInfo: function () {                 // We have change this function regular function because arrow funtion dosen't have their own this.
      console.log("Book: " + this.title + ", Author: " + this.author);
    }
  };
}
 

const book = createBook("1984", "George Orwell");
book.printInfo();
