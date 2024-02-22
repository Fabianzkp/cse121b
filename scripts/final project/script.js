async function fetchBooks(query, searchBy, filterBy) {
    try {
        const encodedQuery = encodeURIComponent(query);
        let apiUrl = `https://openlibrary.org/search.json?q=${encodedQuery}`;

        if (searchBy && (searchBy === "title" || searchBy === "author")) {
            apiUrl += `&${searchBy}=${encodedQuery}`;
        }

        if (filterBy && filterBy !== "all") {
            apiUrl += `&subject=${filterBy}`;
        }

        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.docs;
    } catch (error) {
        console.error("Error fetching book data:", error);
        return [];
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const bookList = document.getElementById("bookList");
    const searchInput = document.getElementById("searchInput");
    const searchBy = document.getElementById("searchBy");
    const searchButton = document.getElementById("searchButton");
    const filterBy = document.getElementById("filterBy");

    async function displayBooks(query, searchBy, filterBy) {
        const books = await fetchBooks(query, searchBy, filterBy);
        bookList.innerHTML = "";

        books.forEach(book => {
            const bookItem = document.createElement("div");
            bookItem.classList.add("book");

            const title = document.createElement("h3");
            title.textContent = book.title;

            const author = document.createElement("p");
            author.textContent = "Author: " + (book.author_name ? book.author_name.join(", ") : "Unknown");

            const img = document.createElement("img");
            img.src = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
            img.alt = book.title;

            bookItem.appendChild(title);
            bookItem.appendChild(author);
            bookItem.appendChild(img);

            bookList.appendChild(bookItem);
        });
    }

    searchButton.addEventListener("click", function() {
        const query = searchInput.value.trim();
        const selectedSearchBy = searchBy.value;
        const selectedFilterBy = filterBy.value;
        displayBooks(query, selectedSearchBy, selectedFilterBy);
    });
});
