import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

class Book extends Component {

    constructor(){
        super();
        this.state = {
            showInfo: false
        };
        this.showBookDescription = this.showBookDescription.bind(this);
        this.closeBookDescription = this.closeBookDescription.bind(this);

        //Used to style the modal that shows the book description
        this.customStyles = {
            content: {
                position            : 'absolute',
                top                 : '50%',
                left                : '50%',
                height              : '70%',
                widht               : '400px',
                right               : 'auto',
                bottom              : 'auto',
                transform           : 'translate(-50%, -50%)',
                margin              : '20px'
            }
        };
    };

    showBookDescription = () => {
        this.setState({showInfo:true});
    };

    closeBookDescription = () => {
        this.setState({showInfo: false})
    };

    render() {

        const {book, onChangeShelf} = this.props;

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
                <div className="book-info">
                    <a href="#" onClick={this.showBookDescription}>Description</a>
                </div>
                <Modal 
                    isOpen={this.state.showInfo} 
                    onRequestClose={this.closeBookDescription}
                    shouldCloseOnOverlayClick={true}
                    style={this.customStyles}
                    contentLabel="Book Info" 
                >
                    <div>
                        <h1>{book.title}</h1>
                        <p>Published: {book.publishedDate}</p>
                        <p>{book.description}</p>
                    </div>
                </Modal>
            </div >
            
        )    
    }
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

export default Book