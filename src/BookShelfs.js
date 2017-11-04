import React, { Component } from 'react'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'

class BookShelfs extends Component {
    
    static proptypes = {
        shelfs: PropTypes.array.isRequired,
        books: PropTypes.array.isRequired
    }

    render() {
        const { shelfs, books } = this.props;

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