//making observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    });
});

//selecting all hidden elements
const hiddenElements = document.querySelectorAll('.hidden');
//observing hidden elements
hiddenElements.forEach((el) => observer.observe(el));

async function getBooks() {
    try {
        const response = await fetch('/books.json');
        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error:', error);
    
    }
}

let books = await getBooks();

console.table(books);

const mainDiv = document.querySelector('.main-div');

let booksLeftTemp1 = (books) => {
    let bookDiv = document.createElement('div');
    bookDiv.classList.add('book-div');
    bookDiv.classList.add('left-book-1');
    bookDiv.id = `book-${books.id}-div`;
    bookDiv.innerHTML = 
    `
        <div class="left-book-top-1">
            <h1 class="left-book-id-1">${books.id}</h1>
            <img class="left-book-cover-1" id="cover-${books.id}" src="${books.pic}" alt="${books.title}-cover">
        </div>
        <div class="left-book-bottom-1">
            <h2 class="left-title-1" id="title-${books.id}">${books.title}</h2>
            <hr>
            <div class="left-info-and-about-1">
                <div class="left-book-info-1" id="info-${books.id}">
                    <h3 class="left-author-1" id="author-${books.id}">${books.author}</h3>
                    <h3 class="left-published-1" id="${books.published}">${books.published}</h3>
                    <h3 class="left-genre-1" id="${books.genre}">${books.genre}</h3>
                </div>
                <div class="left-about-1" id="about-${books.id}">
                    <p>${books.about}</p>
                </div>
            </div>
        </div>
    `;
    mainDiv.appendChild(bookDiv);
    
};

let booksRightTemp1 = (books) => {
    let bookDiv = document.createElement('div');
    bookDiv.classList.add('book-div');
    bookDiv.classList.add('right-book-1');
    bookDiv.id = `book-${books.id}-div`;
    bookDiv.innerHTML =
    `
        <div class="right-book-top-1">
            <h1 class="right-book-id-1">${books.id}</h1>
            <img class="right-book-cover-1" id="cover-${books.id}" src="${books.pic}" alt="${books.title}-cover">
        </div>
        <div class="right-book-bottom-1">
            <h2 class="right-title-1" id="title-${books.id}">${books.title}</h2>
            <hr>
            <div class="right-info-and-about-1">
                <div class="right-book-info-1" id="info-${books.id}">
                    <h3 class="right-author-1" id="author-${books.id}">${books.author}</h3>
                    <h3 class="right-published-1" id="${books.published}">${books.published}</h3>
                    <h3 class="right-genre-1" id="${books.genre}">${books.genre}</h3>
                </div>
                <div class="right-about-1" id="about-${books.id}">
                    <p>${books.about}</p>
                </div>
            </div>
        </div>
    `;
    mainDiv.appendChild(bookDiv);
};

let booksLeftTemp2 = (books) => {
    let bookDiv = document.createElement('div');
    bookDiv.classList.add('book-div');
    bookDiv.classList.add('left-book-2');
    bookDiv.id = `book-${books.id}-div`;
    bookDiv.innerHTML =
    `
        <div class="left-book-top-2">
            <h1 class="left-book-id-2">${books.id}</h1>
            <img class="left-book-cover-2" id="cover-${books.id}" src="${books.pic}" alt="${books.title}-cover">
        </div>
        <div class="left-book-bottom-2">
            <h2 class="left-title-2" id="title-${books.id}">${books.title}</h2>
            <div class="left-info-and-about-2">
                <div class="left-book-info-2" id="info-${books.id}">
                    <h3 class="left-author-2" id="author-${books.id}">${books.author}</h3>
                    <h3 class="left-published-2" id="${books.published}">${books.published}</h3>
                    <h3 class="left-genre-2" id="${books.genre}">${books.genre}</h3>
                </div>
                <div class="left-about-2" id="about-${books.id}">
                    <p>${books.about}</p>
                </div>
            </div>
        </div>
    `;
    mainDiv.appendChild(bookDiv);

};

let booksRightTemp2 = (books) => {
    let bookDiv = document.createElement('div');
    bookDiv.classList.add('book-div');
    bookDiv.classList.add('right-book-2');
    bookDiv.id = `book-${books.id}-div`;
    bookDiv.innerHTML =
    `
        <div class="right-book-top-2">
            <h1 class="right-book-id-2">${books.id}</h1>
            <img class="right-book-cover-2" id="cover-${books.id}" src="${books.pic}" alt="${books.title}-cover">
        </div>
        <div class="right-book-bottom-2">
            <h2 class="right-title-2" id="title-${books.id}">${books.title}</h2>
            <div class="right-info-and-about-2">
                <div class="right-book-info-2" id="info-${books.id}">
                    <h3 class="right-author-2" id="author-${books.id}">${books.author}</h3>
                    <h3 class="right-published-2" id="${books.published}">${books.published}</h3>
                    <h3 class="right-genre-2" id="${books.genre}">${books.genre}</h3>
                </div>
                <div class="right-about-2" id="about-${books.id}">
                    <p class="right-about-2-text">${books.about}</p>
                </div>
            </div>
        </div>
    `;
    mainDiv.appendChild(bookDiv);
};



function generateBooks1(books) {
    mainDiv.innerHTML = '';
    books.forEach((book) => {
        if (book.id % 2 === 0) {
            booksRightTemp1(book);
        } else {
            booksLeftTemp1(book);
        };
    });

};

function generateBooks2(books) {
    mainDiv.innerHTML = '';
    books.forEach((book) => {
        if (book.id % 2 === 0) {
            booksRightTemp2(book);
        } else {
            booksLeftTemp2(book);
        };
    });

};



generateBooks1(books);

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








