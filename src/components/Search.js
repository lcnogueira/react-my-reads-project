import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';
import * as BooksAPI from '../utils/BooksAPI';
import Book from './Book';

class Search extends Component {

    constructor(){
        super();
        this.state = {
            books: []
        };
    };

    static propTypes = {
        onChangeShelf: PropTypes.func.isRequired,
        shelfBooks: PropTypes.array.isRequired
    };

    //It calls the API for books. For each book, if the same book is in the shelfBoooks array, it updates the book shelf.
    searchBooks = (query) => {
        const{shelfBooks} = this.props;

        if(query){
            BooksAPI.search(query,1000).then( (searchResp) => {
                if(searchResp.length>0){
                    const booksToShow = searchResp.map( (searchBook) => {
                        const found = shelfBooks.find( (shelfBook) => shelfBook.id === searchBook.id);
                        searchBook.shelf = found ? found.shelf : 'none';
                        return searchBook;
                    });
                    this.setState({books:booksToShow});
                }else{
                    this.setState({books:[]});        
                }
            });
        }else{
            this.setState({books:[]});
        }
    };

    render() {

        const {onChangeShelf} = this.props;
        const {books} = this.state;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link 
                        to="/"
                        className="close-search"
                    >Close></Link>
                    <div className="search-books-input-wrapper">
                        <DebounceInput 
                            placeholder="Search..."
                            debounceTimeout={200}
                            onChange={(event) => this.searchBooks(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {books.length>0 && books.map((book) => (
                            <li key={book.id}>
                                <Book
                                    book={book}
                                    onChangeShelf={onChangeShelf}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }

}

export default Search