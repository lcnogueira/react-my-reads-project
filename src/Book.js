import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {

    const {book, onChangeShelf} = props;

    return (
        <div className="book">
        <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks &&book.imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer">
                <select value={book.shelf ? book.shelf : "none"} onChange={(event) => onChangeShelf(book, event.target.value)}>
                    <option value="moveTo" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
    </div >
    )

}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

export default Book