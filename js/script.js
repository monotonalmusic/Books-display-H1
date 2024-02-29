import data from './fetch.js';
import generate from './generate.js';
import toggle from './toggleview.js';

let books = await data.fetch('/books.json');

generate.generateBooks2(books);

let prettyButton = document.querySelector('.pretty-button');
prettyButton.addEventListener('click', toggle.toggleview);








