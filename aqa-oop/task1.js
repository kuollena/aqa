const Book = require('./Book');
const EBook = require('./ebook');

// Створення об'єктів
const book1 = new Book("Майстер і Маргарита", "М. Булгаков", 1967);
const book2 = new Book("Кобзар", "Т. Шевченко", 1840);
const ebook1 = new EBook("Фантастичні звірі", "Дж. Ролінг", 2016, "PDF");

// Вивід інформації
book1.printInfo();
book2.printInfo();
ebook1.printInfo();

// Випробування геттерів/сеттерів
ebook1.format = "EPUB";
console.log("Новий формат:", ebook1.format);

// Статичний метод для найдавнішої книги
const oldest = Book.getOldestBook([book1, book2, ebook1]);
console.log("Найстаріша книга:");
oldest.printInfo();

// Створення EBook з Book
const newEBook = EBook.createFromBook(book1, "MOBI");
newEBook.printInfo();
