import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI';
import './App.css';
import BookShelves from './components/BookShelves';
import Search from './components/Search';

class BooksApp extends React.Component {

  constructor(){
    super();
    this.state = {
      books: []
    };
  };

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books: books});
    });
  };

  changeShelf = (book, shelf) => {
    book.shelf = shelf;
    BooksAPI.update(book, shelf).then( _=> {
      this.setState({books: this.state.books.filter( (b) => b.id !== book.id).concat([ book ])});
    });
  };

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
            onChangeShelf={ this.changeShelf }
          />
        )}
        />
      </div>
    )
  }
}

export default BooksApp
