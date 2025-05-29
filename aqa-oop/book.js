class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    // Геттери та сеттери з валідацією
    get title() {
        return this._title;
    }

    set title(value) {
        if (typeof value !== 'string' || !value.trim()) throw new Error('Некоректна назва');
        this._title = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value !== 'string' || !value.trim()) throw new Error('Некоректний автор');
        this._author = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        if (isNaN(value) || value < 0) throw new Error('Некоректний рік');
        this._year = value;
    }

    printInfo() {
        console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}`);
    }

    static getOldestBook(books) {
        return books.reduce((oldest, book) => book.year < oldest.year ? book : oldest);
    }
}

module.exports = Book;
