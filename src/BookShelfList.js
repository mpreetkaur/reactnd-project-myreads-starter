import React, {Component} from 'react';
import BookList from './BookList';
import {Link} from 'react-router-dom';

class BookShelfList extends Component{
    render(){
        return(
          <div className="list-books">
            <div className="list-books-content">
              <div>
                <BookList name='Currently Reading' bookList={this.props.currentlyReading}
                             changeShelf={this.props.changeShelf}/>
                <BookList name='Want to Read' bookList={this.props.wantToRead}
                             changeShelf={this.props.changeShelf}/>
                <BookList name='Read' bookList={this.props.read}
                             changeShelf={this.props.changeShelf}/>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )
    }
}
export default BookShelfList