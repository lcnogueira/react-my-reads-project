import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import { DebounceInput } from 'react-debounce-input'

class Search extends Component {

    state = {
        books: []
    }

    searchBooks = (query) => {
        if(query){
            BooksAPI.search(query,1000).then( books => {
                this.setState({books: books})
            })
        }else{
            this.setState({books:[]})
        }
    }

    render() {

        const {onChangeShelf} = this.props
        const {books} = this.state

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link 
                        to="/"
                        className="close-search"
                    >Close></Link>
                    <div className="search-books-input-wrapper">
                        <DebounceInput 
                            debounceTimeout={100}
                            onChange={event => this.searchBooks(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {books.map((book) => (
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