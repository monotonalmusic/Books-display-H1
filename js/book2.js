const book2 = {};

const mainDiv = document.querySelector('.main-div');

book2.booksLeftTemp2 = (books) => {
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

book2.booksRightTemp2 = (books) => {
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

export default book2;
