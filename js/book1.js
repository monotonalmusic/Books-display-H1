const book1= {};

const mainDiv = document.querySelector('.main-div');

book1.booksLeftTemp1 = (books) => {
    let bookDiv = document.createElement('div');
    bookDiv.classList.add('book-div');
    bookDiv.classList.add('left-book-1');
    bookDiv.id = `book-${books.id}-div`;
    bookDiv.innerHTML = 
    `
        <button class="add-favorites-button pretty-button">*FAVORITE*</button>
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

book1.booksRightTemp1 = (books) => {
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

export default book1;

