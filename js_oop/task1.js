import { Book } from './book.js';
import { EBook } from './ebook.js';

const book1 = new Book('The Silence of the Lambs', 'Thomas Harris', 1988);
const book2 = new Book('1984', 'George Orwell', 1949);
const book3 = new Book('Memoirs of a Geisha', 'Arthur Golden,', 1997);

book1.printInfo();
book2.printInfo();
book3.printInfo();

console.log(book1.year);
book1.year = -2000;
console.log(book1.year);

console.log(book2.year);
book2.year = 2000;
console.log(book2.year);

const ebook1 = new EBook('It', 'Stephen King', 1986, 'PDF');

ebook1.printInfo();

console.log(ebook1.format);

ebook1.format = 'DOCX';
console.log(ebook1.format);

ebook1.format = 'EPUB';
console.log(ebook1.format);

const oldestBook = Book.findOldestBook([book1, book2, book3, ebook1]);
console.log(`The oldest book is "${oldestBook.title}" by ${oldestBook.author}, published in ${oldestBook.year}`);

const ebookFromBook = EBook.fromBook(book2, 'MOBI');
ebookFromBook.printInfo();
