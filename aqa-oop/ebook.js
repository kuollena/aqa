const Book = require('./Book');

class EBook extends Book {
    constructor(title, author, year, format) {
        super(title, author, year);
        this.format = format;
    }

    get format() {
        return this._format;
    }

    set format(value) {
        if (typeof value !== 'string' || !value.trim()) throw new Error('Некоректний формат');
        this._format = value;
    }

    printInfo() {
        super.printInfo();
        console.log(`Формат файлу: ${this.format}`);
    }

    static createFromBook(book, format) {
        return new EBook(book.title, book.author, book.year, format);
    }
}

module.exports = EBook;
