class LS {
    addBook(book) {
        let books = this.getData('books')
        books.push(book)
        this.setData('books', books)
    }
    removeBook(ibook) {
        let books = this.getData('books')

        books.forEach((book, bookIndex) => {
            if(book.name == ibook.name && book.isbn == ibook.isbn && book.author == ibook.author) {
                books.splice(bookIndex, 1)
            }
        })

        this.setData('books', books)
    }

    getData(storage) {
        let items
        if(localStorage.getItem(storage) === null) {
            items = []
        } else {
            items = JSON.parse(localStorage.getItem(storage))
        }
        return items
    }

    setData(storage, items) {
        localStorage.setItem(storage, JSON.stringify(items))
    }
}