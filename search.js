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
        subject: "Information Science",
        summary: "An introduction to the fundamental concepts of information science, focusing on the role of libraries in information dissemination.",
        additionalAuthors: []
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
        subject: "Library Management",
        summary: "Covers various aspects of managing libraries, including staff management, budgeting, and service delivery.",
        additionalAuthors: []
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
        subject: "Digital Libraries",
        summary: "Explores the evolution of digital libraries and their role in modern information access.",
        additionalAuthors: []
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
        subject: "Data Science",
        summary: "Discusses the importance of data science in library practices and decision-making.",
        additionalAuthors: []
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
        subject: "Information Retrieval",
        summary: "A comprehensive overview of information retrieval systems and their applications.",
        additionalAuthors: []
    },
    {
        title: "Wisdom of the Holy Prophet",
        author: "Muhammad Zafrulla Kahn, Sir",
        publication: "London, The London Mosque",
        publicationYear: 1971,
        physicalDescription: "88 pages; 19 cm",
        notes: "OLD RECORD",
        standardNumber: "ISBN: 0855250097",
        subject: "Hadith (Selections: extracts, etc)",
        summary: "A collection of sayings and teachings of the Prophet Muhammad, focusing on their wisdom and relevance.",
        additionalAuthors: []
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
        book.subject.toLowerCase().includes(query) ||
        (book.summary && book.summary.toLowerCase().includes(query)) ||  // Search in summary field
        (book.additionalAuthors.length > 0 && book.additionalAuthors.some(author => author.toLowerCase().includes(query))) // Search in additional authors
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
            <p><strong>Edition:</strong> ${book.edition || 'N/A'}</p>
            <p><strong>Publication:</strong> ${book.publication || 'N/A'}</p>
            <p><strong>Physical Description:</strong> ${book.physicalDescription || 'N/A'}</p>
            <p><strong>Series:</strong> ${book.series || 'N/A'}</p>
            <p><strong>Notes:</strong> ${book.notes || 'N/A'}</p>
            <p><strong>Standard Number:</strong> ${book.standardNumber || 'N/A'}</p>
            <p><strong>Subject:</strong> ${book.subject || 'N/A'}</p>
            <p><strong>Summary:</strong> ${book.summary || 'N/A'}</p>
            <p><strong>Additional Authors:</strong> ${book.additionalAuthors.length > 0 ? book.additionalAuthors.join(', ') : 'N/A'}</p>
        `;

        searchedBookList.appendChild(bookDiv);
    });
});
