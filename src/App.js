import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelfList from './BookShelfList'
import Search from './Search';
import './App.css'
import {Route} from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: [],
    loading: true,
    showSearchPage: false
  }
  componentDidMount (){
    BooksAPI.getAll().then(books => {
      this.setState({books: books, loading: false})
    })
  }
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then(books => {
        this.setState({books: books, loading: false})
      })
    })
};


  render() {
    return (
      <div className="app">
        <Route path="/" exact render={() => (
          <div>
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              {
                <BookShelfList
                  currentlyReading={this.state.books.filter((book) => book.shelf === 'currentlyReading')}
                  wantToRead={this.state.books.filter((book) => book.shelf === 'wantToRead')}
                  read={this.state.books.filter((book) => book.shelf === 'read')}
                  changeShelf={this.changeShelf}
                />
              }
          </div>
        )}/>
        <Route path='/search' render={()=>(
          <Search changeShelf={this.changeShelf} previousBooks={this.state.books} />
        )}/>
      </div>
    )
  }
}

export default BooksApp
