import data from '/js/fetch.js';
import book1 from '/js/book1.js';
import book2 from '/js/book2.js';

let books = await data.fetch('/books.json');

const mainDiv = document.querySelector('.main-div');


function generateBooks1(books) {
    mainDiv.innerHTML = '';
    books.forEach((book) => {
        if (book.id % 2 === 0) {
            book1.booksRightTemp1(book);
        } else {
            book1.booksLeftTemp1(book);
        };
    });

};

function generateBooks2(books) {
    mainDiv.innerHTML = '';
    books.forEach((book) => {
        if (book.id % 2 === 0) {
            book2.booksRightTemp2(book);
        } else {
            book2.booksLeftTemp2(book);
        };
    });

};



generateBooks2(books);

function toggleViews () {
    console.log('hi')
    if (document.querySelector('.left-book-1')) {
        console.log('generated 2')
        generateBooks2(books);
    }   
    else {
        console.log('generated 1')
        generateBooks1(books);
    }
};

let prettyButton = document.querySelector('.pretty-button');

prettyButton.addEventListener('click', toggleViews);








