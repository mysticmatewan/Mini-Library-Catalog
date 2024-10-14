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
    }
];

const searchBtn = document.getElementById('search-btn');
const searchBar = document.getElementById('search-bar');
const searchedBookList = document.getElementById('searched-book-list');

searchBtn.addEventListener('click', () => {
    const query = searchBar.value.toLowerCase();
    searchedBookList.innerHTML = ''; // Clear previous results

    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(query) || 
        book.author.toLowerCase().includes(query) || 
        book.subject.toLowerCase().includes(query)
    );

    if (filteredBooks.length === 0) {
        searchedBookList.innerHTML = '<p>No results found.</p>';
        return;
    }

    filteredBooks.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        bookDiv.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Edition:</strong> ${book.edition}</p>
            <p><strong>Publication:</strong> ${book.publication}</p>
            <p><strong>Physical Description:</strong> ${book.physicalDescription}</p>
            <p><strong>Series:</strong> ${book.series || 'N/A'}</p>
            <p><strong>Notes:</strong> ${book.notes}</p>
            <p><strong>Standard Number:</strong> ${book.standardNumber}</p>
            <p><strong>Subject:</strong> ${book.subject}</p>
        `;

        searchedBookList.appendChild(bookDiv);
    });
});
