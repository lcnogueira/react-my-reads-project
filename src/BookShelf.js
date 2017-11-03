import React, {Component} from 'react'
import Book from './Book'

class BookShelf extends Component{

    render(){

        const {shelf, books} = this.props;

        const booksToShow = books.filter( (book) => book.shelf === shelf.id )

        return(
            <div key={shelf.id} className="bookshelf">
                <h2 className="bookshelf-title">{shelf.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {booksToShow.map((book) => (
                            <li key={books.indexOf(book)}>
                                <Book book={book} />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )

    }
}

export default BookShelf