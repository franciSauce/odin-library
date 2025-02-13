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

// Book Constructor
class Book {
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
}

// Function to add a new book to the library
function addNewBook() {
    if (bookTitle.value === "" || authorName.value === "" || bookPage.value === "" || bookStatus === "")
        return;
        bookGrid.innerHTML = "";
        const newBook = new Book(bookTitle.value, authorName.value, bookPage.value, bookStatus.value);
        myLibrary.push(newBook);
        displayBooks();
        closeModal();
}

// Change book status
function changeBookStatus() {
    let dataIndex = this.getAttribute("data-index");
    if (myLibrary[dataIndex].status.toLowerCase() === "read") {
        myLibrary[dataIndex].status = "Unread";
    } else {
        myLibrary[dataIndex].status = "Read";
    }
    displayBooks();
}
displayBooks();

// Delete book from the Library
function deleteBook() {
    let dataIndex = this.getAttribute("data-index");
    myLibrary.splice(dataIndex, 1);
    cardGrid.innerHTML = "";
    displayBooks();
}