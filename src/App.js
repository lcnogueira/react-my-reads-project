import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelfs from './BookShelfs'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books: [],
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
      // console.log(this.state.books);
    })
    
  }

  // The purpose of this function is to change the book shelf each time the user clicks on the select shelf.
  changeShelf = (shelf) => {
    this.setState(() => ({
      
    }))
  }

  render() {
    const shelfs = [
      {id: 'currentlyReading', title: 'Currently Reading'},
      {id: 'wantToRead', title: 'Want to Read'},
      {id: 'read', title: 'Read'}
    ]

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
          <BookShelfs 
            shelfs={shelfs}
            books={this.state.books}
          />
        )}
      </div>
    )
  }
}

export default BooksApp
