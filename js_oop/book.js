class Book {
	constructor(title, author, year) {
		this._title = title;
		this._author = author;
		this._year = year;
	}

	get title() {
		return this._title;
	}

	set title(value) {
		if (typeof value !== 'string') {
			console.log('Title must be a string');
			return;
		}
		this._title = value;
	}

	get author() {
		return this._author;
	}
	set author(value) {
		if (typeof value !== 'string') {
			console.log('Author must be a string');
			return;
		}
		this._author = value;
	}

	get year() {
		return this._year;
	}

	set year(value) {
		if (typeof value !== 'number' || value < 0) {
			console.log('Year must be a positive number');
			return;
		}
		this._year = value;
	}
	printInfo() {
		console.log(`The book "${this.title}" was written by ${this.author} in ${this.year}`);
	}

	static findOldestBook(booksArray) {
		return booksArray.reduce((oldest, current) => {
			return current.year < oldest.year ? current : oldest;
		});
	}
}

export { Book };
