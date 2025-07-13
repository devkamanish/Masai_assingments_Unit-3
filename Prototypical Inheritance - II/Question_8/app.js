

import Book  from "./Book.js"; 
import Member from "./Member.js"
import PremiumMember from "./Premium.js"


// Create book instances
const book1 = new Book("1984", "George Orwell");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee");
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
const book4 = new Book("Moby-Dick", "Herman Melville");
const book5 = new Book("Pride and Prejudice", "Jane Austen");
const book6 = new Book("War and Peace", "Leo Tolstoy");


// Regular member
const alice = new Member("Alice");
alice.borrowBook(book1);
alice.borrowBook(book2);
alice.borrowBook(book3);
alice.borrowBook(book4); // should be rejected


// Premium member
const bob = new PremiumMember("Bob");
bob.borrowBook(book1); // already borrowed
bob.borrowBook(book4);
bob.borrowBook(book5);
bob.borrowBook(book6);
bob.borrowBook(book2); // already borrowed
bob.borrowBook(book3);


const borrowForAlice = alice.borrowBook.bind(alice)
borrowForAlice(book5)   // allowed only if book is available

