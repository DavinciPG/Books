const form = document.querySelector('form')

const title = document.querySelector('#title')
const author = document.querySelector('#author')
const isbn = document.querySelector('#isbn')

const table = document.querySelector('#tabel')
const body = table.querySelector('tbody')

form.addEventListener('submit', addBook)
body.addEventListener('click', removeBook)
document.addEventListener('DOMContentLoaded', getBookFromLocalStorage)

class Book {
    constructor(nimi, isbn, author) {
        this.name = nimi;
        this.isbn = isbn;
        this.author = author;
    }
}

function addBook(event) {
    const book = new Book(title.value, isbn.value, author.value)
    const Row = `<tr>
                   <td id="tiitel">${book.name}</td>
                   <td id="autor">${book.author}</td>
                   <td id="isbnkood">${book.isbn}</td>
                   <td><a href="#">X</a></td>
                </tr>`

    body.insertAdjacentHTML('beforeend', Row)
    addBookStorage(book)
    event.preventDefault();
}

function addBookStorage(book) {
    let books
    if(localStorage.getItem('books') === null) {
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
}

function removeBook(event) {
    if(event.target.textContent == 'X') {
        let bookISBN = event.target.parentElement.previousElementSibling
        let bookAuthor = bookISBN.previousElementSibling
        let bookName = bookAuthor.previousElementSibling

        removeBookStorage(bookName.textContent, bookAuthor.textContent, bookISBN.textContent)
        event.target.parentElement.parentElement.remove()
    }
}

function removeBookStorage(bookName, bookAuthor, bookISBN) {
    let books
    if(localStorage.getItem('books') === null) {
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    books.forEach((book, bookIndex) => {
        if(book[0] == bookName && book[1] == bookAuthor && book[2] == bookISBN) {
            console.log('found book')
            books.splice(bookIndex, 1)
        }
    })

    localStorage.setItem('books', JSON.stringify(books))
}

function getBookFromLocalStorage() {
        let books
    if(localStorage.getItem('books') === null) {
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }

    books.forEach((book) => {
        const Row = `<tr>
                   <td>${book[0]}</td>
                   <td>${book[1]}</td>
                   <td>${book[2]}</td>
                   <td><a href="#">X</a></td>
                </tr>`

        body.insertAdjacentHTML('beforeend', Row)
    })
}