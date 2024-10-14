document.addEventListener("DOMContentLoaded", function() {
    const books = [
        {
            title: "Introduction to Information Science",
            author: "David Lankes",
            edition: "2nd Edition",
            publication: "MIT Press, 2016",
            physicalDescription: "300 pages; 24 cm",
            series: "Library Science Series",
            notes: "Includes bibliographical references and index.",
            standardNumber: "ISBN: 9780262528494",
            subject: "Information Science"
        },
        {
            title: "Library Management",
            author: "James Rice",
            edition: "1st Edition",
            publication: "Oxford University Press, 2019",
            physicalDescription: "250 pages; 22 cm",
            series: "Library Operations",
            notes: "Focuses on modern management practices.",
            standardNumber: "ISBN: 9780198776399",
            subject: "Library Management"
        },
        {
            title: "Digital Libraries",
            author: "Michael Lesk",
            edition: "3rd Edition",
            publication: "Morgan Kaufmann, 2020",
            physicalDescription: "350 pages; 25 cm",
            series: "Information Technology Series",
            notes: "Covers history and future of digital libraries.",
            standardNumber: "ISBN: 9780128236479",
            subject: "Digital Libraries"
        },
        {
            title: "Data Science for Librarians",
            author: "Scott Brown",
            edition: "1st Edition",
            publication: "Springer, 2021",
            physicalDescription: "400 pages; 23 cm",
            series: "Data Science in Libraries",
            notes: "Emphasis on data-driven decision making.",
            standardNumber: "ISBN: 9783030725631",
            subject: "Data Science"
        },
        {
            title: "Information Retrieval Systems",
            author: "Gerard Salton",
            edition: "1st Edition",
            publication: "Prentice Hall, 1999",
            physicalDescription: "500 pages; 24 cm",
            series: "",
            notes: "Classic text on information retrieval.",
            standardNumber: "ISBN: 9780134638372",
            subject: "Information Retrieval"
        },
        // Add more books to cover over 30 with the same 8 fields
    ];

    const itemsPerPage = 10;
    let currentPage = 1;
    const totalPages = Math.ceil(books.length / itemsPerPage);

    function renderBooks(page) {
        const bookList = document.getElementById("book-list");
        bookList.innerHTML = "";

        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, books.length);

        let bookHTML = "<ol>";
        for (let i = startIndex; i < endIndex; i++) {
            const book = books[i];
            bookHTML += `
                <li>
                    <strong>Title:</strong> ${book.title} <br>
                    <strong>Author:</strong> ${book.author} <br>
                    <strong>Edition:</strong> ${book.edition} <br>
                    <strong>Publication:</strong> ${book.publication} <br>
                    <strong>Physical Description:</strong> ${book.physicalDescription} <br>
                    <strong>Series:</strong> ${book.series} <br>
                    <strong>Notes:</strong> ${book.notes} <br>
                    <strong>Standard Number:</strong> ${book.standardNumber} <br>
                    <strong>Subject:</strong> ${book.subject} <br><br>
                </li>`;
        }
        bookHTML += "</ol>";
        bookList.innerHTML = bookHTML;

        renderPageNumbers();
        updateButtons();
    }

    function renderPageNumbers() {
        const pageNumbers = document.getElementById("page-numbers");
        pageNumbers.innerHTML = "";

        let startPage = Math.max(1, currentPage - 2);
        let endPage = Math.min(totalPages, currentPage + 2);

        for (let i = startPage; i <= endPage; i++) {
            const pageBtn = document.createElement("button");
            pageBtn.textContent = i;
            if (i === currentPage) {
                pageBtn.disabled = true;
            }
            pageBtn.addEventListener("click", function() {
                currentPage = i;
                renderBooks(currentPage);
            });
            pageNumbers.appendChild(pageBtn);
        }
    }

    function updateButtons() {
        document.getElementById("prev-btn").disabled = currentPage === 1;
        document.getElementById("first-btn").disabled = currentPage === 1;
        document.getElementById("next-btn").disabled = currentPage === totalPages;
        document.getElementById("last-btn").disabled = currentPage === totalPages;
    }

    document.getElementById("first-btn").addEventListener("click", function() {
        currentPage = 1;
        renderBooks(currentPage);
    });

    document.getElementById("prev-btn").addEventListener("click", function() {
        if (currentPage > 1) {
            currentPage--;
            renderBooks(currentPage);
        }
    });

    document.getElementById("next-btn").addEventListener("click", function() {
        if (currentPage < totalPages) {
            currentPage++;
            renderBooks(currentPage);
        }
    });

    document.getElementById("last-btn").addEventListener("click", function() {
        currentPage = totalPages;
        renderBooks(currentPage);
    });

    renderBooks(currentPage); // Initial render

    // Function to display books from the catalog
function displayBooks(books) {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = ''; // Clear previous results

    if (books.length === 0) {
        bookList.innerHTML = '<p>No books found matching your search.</p>';
        return;
    }

    const ol = document.createElement('ol'); // Use ordered list for catalog entries
    books.forEach(book => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>Title:</strong> ${book.title}<br>
            <strong>Author:</strong> ${book.author}<br>
            <strong>Publisher:</strong> ${book.publisher}<br>
            <strong>Year:</strong> ${book.year}<br>
            <strong>Subject:</strong> ${book.subject}<br>
            <strong>ISBN:</strong> ${book.isbn}
        `;
        ol.appendChild(li);
    });
    bookList.appendChild(ol);
}
});
