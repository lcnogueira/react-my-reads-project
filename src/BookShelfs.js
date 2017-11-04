import React, { Component } from 'react'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'

class BookShelfs extends Component {

    static proptypes = {
        shelfs: PropTypes.array.isRequired,
        books: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    }

    render() {
        const { shelfs, books, onChangeShelf } = this.props;

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                        {shelfs.map((shelf) => (
                            <div key={shelf.id}>
                                <BookShelf 
                                    shelf={shelf}
                                    books={books}
                                    onChangeShelf={onChangeShelf}
                                />
                            </div>
                        ))}
                </div>
                {/* TODO: Busca aqui */}
            </div>
        )
    }
}

export default BookShelfs