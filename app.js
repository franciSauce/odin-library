// Selecting necessary elements from the DOM
const bookGrid = document.querySelector(".book-grid");
const bookTitle = document.querySelector("#title");
const authorName = document.querySelector("#author");
const bookPage = document.querySelector("#pages");
const bookStatus = document.querySelector("#status");
const addBook = document.querySelector(".add-btn");
const submitBtn = document.querySelector("#submit");
const cancelBtn = document.querySelector("#close");
const modalBox = document.querySelector(".modal-box");
const bookTotal = document.querySelector(".total");
const bookRead = document.querySelector(".read");
const bookUnread = document.querySelector(".unread");

// Initial book library with a default book
let myLibrary = [{
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    pages: 320,
    status: "Unread"
}];

