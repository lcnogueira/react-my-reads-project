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
    })
    
  }

  changeShelf = (book, shelf) => {
    book.shelf = shelf
    BooksAPI.update(book, shelf).then( _=> {
       const newBookList = this.state.books.filter( (b) => b.id !== book.id )
       newBookList.push(book)
       this.setState({books:newBookList})
    })
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
            onChangeShelf={ (book, shelf) => this.changeShelf(book, shelf) }
          />
        )}
      </div>
    )
  }
}

export default BooksApp
