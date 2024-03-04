import data from './fetch.js';
import generate from './generate.js';
import toggle from './toggleview.js';

let books = await data.fetch('/books.json');

generate.generateBooks1(books);

let prettyButton = document.querySelector('.pretty-button');
prettyButton.addEventListener('click', toggle.toggleview);

let favoriteButtons = document.querySelectorAll('.add-favorites-button');

if (favoriteButtons) {
    favoriteButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            //gets title of book
            console.log(e.target.parentElement.firstElementChild.nextElementSibling.lastElementChild.alt.split('-')[0]);
            let title = e.target.parentElement.firstElementChild.nextElementSibling.lastElementChild.alt.split('-')[0];
            let dropdownContent = document.querySelector('.dropdown-content');
            let favoriteListItem = document.createElement('li');
            favoriteListItem.innerHTML = title;
            dropdownContent.appendChild(favoriteListItem);
        });
    });
};

let dropdownButton = document.querySelector('#dropdown-button');

dropdownButton.addEventListener('click', () => {
    let dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('hidden');
});


