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
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
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
    const currentlyReading = this.state.books.filter((book) => book.shelf === 'currentlyReading')
    const wantToRead = this.state.books.filter((book) => book.shelf === 'wantToRead')
    const read = this.state.books.filter((book) => book.shelf === 'read')

    return (
      <div className="app">
        <Route path="/" exact render={() => (
          <div>
              <div className="list-books-title">
                  <h1>MyReads</h1>
              </div>
              {
                <BookShelfList
                          currentlyReading={currentlyReading}
                          wantToRead={wantToRead}
                          read={read}
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
