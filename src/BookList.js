import React, {Component} from 'react';
import Book from "./Book.js";

class BookList extends Component{
    render(){
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            this.props.bookList.map((book) => {
                                return <li key={book.id}>
                                    <Book book={book} changeShelf={this.props.changeShelf}/>
                                </li>
                            })
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookList