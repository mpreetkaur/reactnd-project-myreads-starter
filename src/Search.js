import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book'


class Search extends Component {
    state = {
        searchedBooks: []
    }
    searchBook = (event) => {
        let query = event.target.value;
        if (!query) {
            this.setState({searchedBooks: []});
            return;
        }
        BooksAPI.search(query).then(searchedBooks => {
            if(searchedBooks.error){
                searchedBooks = [];
            }
            searchedBooks = searchedBooks.map((book)=>{
                const bookInShelf = this.props.previousBooks.find(b => b.id === book.id);
                if(bookInShelf){
                    book.shelf = bookInShelf.shelf
                }
                return book;
            })
            this.setState({searchedBooks: searchedBooks})
            console.log(this.state.searchedBooks)
        })
    }
    render (){
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={this.searchBook}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.searchedBooks.length !== 0 && this.state.searchedBooks.map(book => (
                            <li key={book.id}>
                                <Book book={book} changeShelf={this.props.changeShelf}/>
                            </li>
                        ))}
                    </ol>
                </div>
                {!this.state.searchedBooks.length && <img className='errorImg' src='http://images.clipartpanda.com/search-png-white-3D-Women-Search-03.png' alt='error'/>}
            </div>
        )
    }
}
export default Search