import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelfList from './BookShelfList'
import './App.css'
import {Route} from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: [],
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
      this.setState({books: books})
    })
  }
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
        .then(
            this.setState((state) => ({
                books: state.books.map(b => {
                    if (b.id === book.id) {
                        b.shelf = shelf;
                    }
                    return b
                }),
            }))
        )
        console.log(book, shelf)
};


  render() {
    return (
      <div className="app">
      <Route path="/" exact render={() => (
          <div>
              <div className="list-books-title">
                  <h1>myReads: Your Personal Library</h1>
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
  </div>
)
  }
}

export default BooksApp
