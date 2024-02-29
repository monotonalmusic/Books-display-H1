import book1 from './book1.js';
import book2 from './book2.js';

const generate = {};

generate.generateBooks1 = async (books) => {
    const mainDiv = document.querySelector('.main-div');
    mainDiv.innerHTML = '';
    books.forEach((book) => {
        if (book.id % 2 === 0) {
            book1.booksRightTemp1(book);
        } else {
            book1.booksLeftTemp1(book);
        };
    });

}

generate.generateBooks2 = async (books) => {
    const mainDiv = document.querySelector('.main-div');
    mainDiv.innerHTML = '';
    books.forEach((book) => {
        if (book.id % 2 === 0) {
            book2.booksRightTemp2(book);
        } else {
            book2.booksLeftTemp2(book);
        };
    });

}

export default generate;