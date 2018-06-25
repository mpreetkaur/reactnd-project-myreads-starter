## MyReads Book Library
**"myReads"** is a _React_ app in which users can categorise books as 'read', 'currently reading' and 'wants to read'. The categorised books will be displayed on front page. Users can search for books and can add books to their list.

## Getting Started
When the app is loaded, it will display 7 books _by default_. User can click on the green colored drop-down button on bottom-right corner of every book to change the category of book as 'read', 'currently reading' and 'wants to read'.

<p><img src='images/gifR.gif' width="400px" height="400px"/></p>

<<<<<<< HEAD
## Search Books
User can search for the books by clicking on the '+' signed button at bottom-right of page which takes user to the search page and user can search for books in 'search bar'. and can add books to their library the same way used to change books library.
||||||| merged common ancestors
## TL;DR
=======
## Search Books
User can search for the books by clicking on the '+' signed button at bottom-right of page which takes user to the search page and user can search for books in 'search bar'. and can add books to their library, the same way used to change books library.
>>>>>>> ca09e77c9192cf47914058520b4424e7a9dcd03a

## Installation
- Clone this git repository.
- Change directory to this project directory
- Run _npm start_ in your terminal(this will open page on your browser).
- You can use the Library as you want to add or remove books as shown below.

<p><img src='images/gif2.gif' width="400px" height="400px"/></p>

## Author
Manpreet Kaur.

<<<<<<< HEAD
![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
||||||| merged common ancestors
Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
=======
![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)


>>>>>>> ca09e77c9192cf47914058520b4424e7a9dcd03a
