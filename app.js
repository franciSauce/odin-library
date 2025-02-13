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

// Display
function displayBooks() {
    bookGrid.innerHTML = "";
    for (let [index, book] of myLibrary.entries()) {
        const icon = document.createElement("div");
        icon.classList.add("book-icon");
        const txtTitle = document.createElement("h3");
        txtTitle.textContent = `${book.title}`;
        const txtAuthor = document.createElement("p");
        txtAuthor.textContent = `by ${book.author}`;
        const txtPage = document.createElement("p");
        txtPage.textContent = `${book.page} pages`;
        const txtStatus = document.createElement("p");
        txtStatus.textContent = book.status;

        const changeStatusBtn = document.createElement("button");
        changeStatusBtn.textContent = "S";
        changeStatusBtn.classList.add("status-btn");
        changeStatusBtn.setAttribute("data-index", index);
        changeStatusBtn.addEventListener("click", changeBookStatus);

        const delBtn = document.createElement("button");
        delBtn.textContent = "X";
        delBtn.classList.add("delete-btn");
        delBtn.setAttribute("data-index", index);
        delBtn.addEventListener("click", deleteBook);

        icon.appendChild(txtTitle);
        icon.appendChild(txtAuthor);
        icon.appendChild(txtPage);
        icon.appendChild(txtStatus);
        icon.appendChild(changeStatusBtn);
        icon.appendChild(delBtn);

        bookGrid.appendChild(icon);
    }
    displayStats();
}

// Update & display stats
function displayStats() {
    let readBooks = myLibrary.filter(book => {
        if (book.status.toLowerCase() === "read")
        return true;
    })
    let unreadBooks = myLibrary.filter(book => {
        if (book.status.toLowerCase() === "unread")
        return true;
    })
    bookTotal.textContent = `${myLibrary.length}`;
    bookRead.textContent = `${readBooks.length}`;
    bookUnread.textContent = `${unreadBooks.length}`;
}

// Modal functions
function displayModal() {
    console.log("Display modal function is called");
    modalBox.classList.add("show");
}

function closeModal() {
    console.log("Close modal function is called");
    modalBox.classList.remove("show");
    resetInputs();
}

function resetInputs() {
    bookTitle.value = "";
    authorName.value = "";
    bookPage.value = "";
    bookStatus.value = "";
}

displayBooks();

