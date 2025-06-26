const library = {
  books: [
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
  ],

  addBook(book) {
    const { title, author, year } = book;

    // Validate all fields are present
    if (!title || !author || !year) {
      console.error("Book information is incomplete. 'title', 'author', and 'year' are required.");
      return;
    }

    // Validate types
    if (typeof title !== "string" || typeof author !== "string" || typeof year !== "number") {
      console.error("Invalid data types: 'title' and 'author' must be strings, 'year' must be a number.");
      return;
    }

    // Check for duplicate title
    if (this.findBookByTitle(title)) {
      console.error(`A book with the title "${title}" already exists.`);
      return;
    }

    // Add the book
    this.books.push({ title, author, year });
    console.log(`Book "${title}" added successfully.`);
  },

  findBookByTitle(title) {
    return this.books.find(book => book.title === title);
  },

  removeBook(title) {
    const index = this.books.findIndex(book => book.title === title);

    if (index !== -1) {
      const removed = this.books.splice(index, 1);
      console.log(`Book "${removed[0].title}" removed.`);
    } else {
      console.warn(`Book titled "${title}" not found.`);
    }
  }
};

// Test cases

library.addBook({ author: "George Orwell", year: 1949 }); 
// Invalid - missing title

library.addBook({ title: "1984", author: "George Orwell", year: "1949" }); 
// Invalid - year should be a number

library.addBook({ title: "1984", author: "George Orwell", year: 1949 }); 
// Valid - should be added

library.addBook({ title: "1984", author: "George Orwell", year: 1949 }); 
// Duplicate - should not be added

console.log("Books in library:", library.books.length); // Should be 2

library.removeBook("The Hobbit"); // Should remove
library.removeBook("The Hobbit"); // Not found
