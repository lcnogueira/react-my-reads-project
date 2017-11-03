import React, { Component, PropTypes } from 'react'
// import React from 'react'
import Book from './Book'
// import PropTypes from 'prop-types'

class BookShelf extends Component {
    static proptypes = {
        books: PropTypes.array.isRequired
    }

    render(){
        const { shelfTitle, books } = this.props;

        return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book) => (
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