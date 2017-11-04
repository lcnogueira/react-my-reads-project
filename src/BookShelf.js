import React, {Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'


class BookShelf extends Component{

    static proptypes = {
        shelf: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired
    }

    render(){

        const {shelf, books} = this.props;

        const booksToShow = books.filter( (book) => book.shelf === shelf.id )

        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {booksToShow.map((book) => (
                            <li key={book.id}>
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