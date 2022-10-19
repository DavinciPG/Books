const form = document.querySelector('form')

const title = document.querySelector('#title')
const author = document.querySelector('#author')
const isbn = document.querySelector('#isbn')

const table = document.querySelector('#tabel')
const body = table.querySelector('tbody')

form.addEventListener('submit', addBook)
body.addEventListener('click', removeBook)

function addBook(event) {
    const Row = `<tr>
                   <td id="tiitel">${title.value}</td>
                   <td id="autor">${author.value}</td>
                   <td id="isbnkood">${isbn.value}</td>
                   <td><a href="#">X</a></td>
                </tr>`

    body.insertAdjacentHTML('beforeend', Row)
    addBookStorage(title.value, author.value, isbn.value)
    event.preventDefault();
}

function addBookStorage(bookName, bookAuthor, bookISBN) {
    let books
    if(localStorage.getItem('books') === null) {
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    books.push([bookName, bookAuthor, bookISBN])
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