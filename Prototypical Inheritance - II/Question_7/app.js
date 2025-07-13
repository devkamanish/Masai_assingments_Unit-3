
// main file 
import books  from "./books.js";

const summaries = books.map(book =>book.getSummary());

console.log('Book Summaries:\n');
console.log(summaries.join('\n'));



// use 'node app.js' to start;
