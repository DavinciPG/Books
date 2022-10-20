const table = document.querySelector('#asjadsiia')

class UI {
    removeBook(target) {
        target.target.parentElement.parentElement.remove()
    }

    addBook(book) {
        const Row = `<tr>
                   <td id="tiitel">${book.name}</td>
                   <td id="autor">${book.author}</td>
                   <td id="isbnkood">${book.isbn}</td>
                   <td><a href="#">X</a></td>
                </tr>`

        console.log('UI addBook: ', book)
        table.insertAdjacentHTML('beforeend', Row)
    }

    getBooks(books) {
        books.forEach((book => {
            this.addBook(book)
            console.log('Added book ', book)
        }))
    }

    clearFields() {
        const title = document.querySelector('#title')
        title.innerHTML = ''
        const author = document.querySelector('#author')
        author.innerHTML = ''
        const isbn = document.querySelector('#isbn')
        isbn.innerHTML = ''
    }
}