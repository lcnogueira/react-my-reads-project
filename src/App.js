import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'

const currentlyBooks = [
  {
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee"
  },
  {
    "title": "Ender's Game",
    "author": "Orson Scott Card"
  }
]

const wantBooks = [
  {
    "title": "1776",
    "author": "David McCullough"
  },
  {
    "title": "Harry Potter and the Sorcerer's Stone",
    "author": "J.K. Rowling"
  }
]

const readBooks = [
  {
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien"
  },
  {
    "title": "The Adventures of Tom Sawyer",
    "author": "Mark Twai"
  },
  {
    "title": "Oh, the Places You'll Go!",
    "author": "Seuss"
  }
]

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {
                  //TODO: compare with the model project
                }
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf shelfTitle="Currently Reading" books={currentlyBooks}/>

                <BookShelf shelfTitle="Want to Read" books={wantBooks} />

                <BookShelf shelfTitle="Read" books={readBooks}/>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
