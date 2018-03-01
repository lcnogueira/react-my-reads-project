# MyReads Project

This project was developed for the React Nanodegree Program. It is based on the starter template provided by Udacity. For more information: [Starter Template from Udacity](https://github.com/udacity/reactnd-project-myreads-starter).

## How to start the app

Just:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What Is in this project
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains Bookshelves and Search component.
    ├── Search.js # Component where the user can search for books and set their shelves.
    ├── BookShelves.js # Component that holds each Bookshelf. 
    ├── BookShelf.js # Component that is used to wrap the books.
    ├── Book.js # Component used for books informations.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Backend Server

The provided file [`BooksAPI.js`](src/utils/BooksAPI.js) contains the methods needed to perform necessary operations on the backend. To see the avaliable methods and their signature, visit  [Starter Template from Udacity](https://github.com/udacity/reactnd-project-myreads-starter).

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
