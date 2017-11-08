import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookShelves from './BookShelves';
import Search from './Search';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books: books});
    })
  }

  changeShelf = (book, shelf) => {
    book.shelf = shelf;
    BooksAPI.update(book, shelf).then( _=> {
       const newBookList = this.state.books.filter( (b) => b.id !== book.id );
       newBookList.push(book);
       this.setState({books:newBookList});
    })
  }

  render() {
    const shelves = [
      {id: 'currentlyReading', title: 'Currently Reading'},
      {id: 'wantToRead', title: 'Want to Read'},
      {id: 'read', title: 'Read'}
    ];

    return (
      <div className="app">
        <Route path="/" exact render={() => (
            <BookShelves 
              shelves={shelves}
              books={this.state.books}
              onChangeShelf={ (book, shelf) => this.changeShelf(book, shelf) }
            />
        )}/>
        <Route path="/search" render={() => (
          <Search
            onChangeShelf={ (book, shelf) => {
              this.changeShelf(book, shelf) 
            }}
          />
        )}
        />
      </div>
    )
  }
}

export default BooksApp
