// import React, { Component } from 'react'
import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

const BookShelf = (props) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{props.shelfTitle}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {props.books.map((book) => (
                    <li key={props.books.indexOf(book)}>
                        <Book book={book} />
                    </li>
                ))}
            </ol>
        </div>
    </div>
);

BookShelf.propTypes = {
    books: PropTypes.array.isRequired
}

export default BookShelf