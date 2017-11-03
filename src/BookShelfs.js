import React, { Component, PropTypes } from 'react'
import BookShelf from './BookShelf'

class BookShelfs extends Component {
    static proptypes = {
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