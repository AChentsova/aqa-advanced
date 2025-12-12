import { Book } from './book.js';
class EBook extends Book {
    constructor(title, author, year, format) {
        super(title, author, year);
        this._format = format;
    }

    get format() {
        return this._format;
    }
    set format(value) {
        const allowedFormats = ["PDF", "EPUB", "MOBI"];
        if (!allowedFormats.includes(value)) {
            console.log(`Format must be one of the following: ${allowedFormats.join(", ")}`);
            return;
        }
        this._format = value;
    }
    printInfo() {
        console.log(`The book "${this.title}" was written by ${this.author} in ${this.year} and is available in ${this.format} format`);
    }
    static fromBook(book, format) {
        return new EBook(book.title, book.author, book.year, format);
    }
}

export { EBook };