document.addEventListener("DOMContentLoaded", function () {
    const books = ["Introduction to Information Science", "Library Management", "Digital Libraries", "Data Science for Librarians", "Information Retrieval Systems", "Wisdom of the Holy Prophet"];

    const borrowedBooks = [];

    function updateOutput(message) {
        const output = document.getElementById("service-output");
        output.innerHTML = `<p>${message}</p>`;
    }

    function borrowBook(bookTitle) {
        if (books.includes(bookTitle) && !borrowedBooks.includes(bookTitle)) {
            borrowedBooks.push(bookTitle);
            updateOutput(`You have successfully borrowed "${bookTitle}".`);
        } else if (borrowedBooks.includes(bookTitle)) {
            updateOutput(`The book "${bookTitle}" is already borrowed.`);
        } else {
            updateOutput(`The book "${bookTitle}" is not available in our catalogue.`);
        }
    }

    function returnBook(bookTitle) {
        const index = borrowedBooks.indexOf(bookTitle);
        if (index > -1) {
            borrowedBooks.splice(index, 1);
            updateOutput(`You have successfully returned "${bookTitle}".`);
        } else {
            updateOutput(`You haven't borrowed the book "${bookTitle}".`);
        }
    }

    function renewBook(bookTitle) {
        if (borrowedBooks.includes(bookTitle)) {
            updateOutput(`You have successfully renewed "${bookTitle}".`);
        } else {
            updateOutput(`You can't renew the book "${bookTitle}" because you haven't borrowed it.`);
        }
    }

    function checkoutBook(bookTitle) {
        if (books.includes(bookTitle) && !borrowedBooks.includes(bookTitle)) {
            updateOutput(`You have successfully checked out "${bookTitle}". You can borrow it.`);
        } else if (borrowedBooks.includes(bookTitle)) {
            updateOutput(`The book "${bookTitle}" is currently borrowed.`);
        } else {
            updateOutput(`The book "${bookTitle}" is not available in our catalogue.`);
        }
    }

    // Event listeners for the buttons
    document.getElementById("borrow-btn").addEventListener("click", function () {
        const bookTitle = document.getElementById("borrow-book").value;
        borrowBook(bookTitle);
    });

    document.getElementById("return-btn").addEventListener("click", function () {
        const bookTitle = document.getElementById("return-book").value;
        returnBook(bookTitle);
    });

    document.getElementById("renew-btn").addEventListener("click", function () {
        const bookTitle = document.getElementById("renew-book").value;
        renewBook(bookTitle);
    });

    document.getElementById("checkout-btn").addEventListener("click", function () {
        const bookTitle = document.getElementById("checkout-book").value;
        checkoutBook(bookTitle);
    });
});
