const form = document.querySelector('form')

const ui = new UI();
const ls = new LS();

form.addEventListener('submit', addBook)
table.addEventListener('click', removeBook)
document.addEventListener('DOMContentLoaded', getBooks)

function addBook(event) {
    const title = document.querySelector('#title')
    if(title.value == '')
        return
    const author = document.querySelector('#author')
    if(author.value == '')
        return
    const isbn = document.querySelector('#isbn')
    if(isbn.value == '')
        return
    const book = new Book(title.value, isbn.value, author.value)
    console.log('APP addBook: ', book)
    ui.addBook(book)
    ls.addBook(book)
    ui.clearFields()
}

function removeBook(event) {
    if(event.target.textContent == 'X') {
        let bookAuthor = event.target.parentElement.previousElementSibling
        let bookISBN = bookAuthor.previousElementSibling
        let bookName = bookISBN.previousElementSibling

        const book = new Book(bookName.textContent, bookISBN.textContent, bookAuthor.textContent)
        ls.removeBook(book)
        ui.removeBook(event)
    }
}

function getBooks() {
    let books = ls.getData('books')
    console.log('Book data: ', books)
    ui.getBooks(books)
}