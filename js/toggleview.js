import generate from './generate.js';
import data from './fetch.js';

const toggle = {};


toggle.toggleview = async () => {
    let books = await data.fetch('../books.json');
    if (document.querySelector('.left-book-1')) {
        console.log('generated 2')
        generate.generateBooks2(books);
    }   
    else {
        console.log('generated 1')
        generate.generateBooks1(books);
    }
}

export default toggle;