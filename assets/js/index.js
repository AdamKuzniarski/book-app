import fetchBooks from "./fetch.js";

const bookList = document.getElementById("book-list");

function setBooksNum(books) {
  const booksNum = document.getElementById("displayed-books-number");
  booksNum.textContent = `${books.length} Book${
    books.length !== 1 ? "s" : ""
  } displayed`;
}

function createBook(info) {
  const tr = document.createElement("tr");
  const title = info.title;
  const isbn = info.isbn;
  const author = info.author;
  const publisher = info.publisher;
  const id = info.id;
  tr.innerHTML = `
  

       
              <tr>
                <td>
                  <button class="button button-clear fav-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="fav"
                    >
                      <path
                        d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
                      />
                    </svg>
                  </button>
                </td>
                <td>${title}</td>
                <td>${isbn}</td>
                <td>${author}</td>
                <td>${publisher}</td>
                <td>
                 <button onclick="location.href='detail.html?isbn=${isbn}'">Detail</button>
                </td>
              </tr>
      
              

  `;
  return tr;
}

export default function searchTitle(data) {
  const searchInput = document.getElementById("search");
  const filterEl = document.getElementById("by-publisher");

  filterEl.innerHTML = `
  <option value="-">-</option>`;
  const publishers = new Set(data.map((book) => book.publisher));
  publishers.forEach((publisher) => {
    const option = document.createElement("option");
    option.value = publisher;
    option.textContent = publisher;
    filterEl.append(option);
  
   
  });

filterEl.addEventListener("change", async () => {
  const selectedPublisher = filterEl.value === "-" ? "" : filterEl.value;
  const searchQuery = searchInput.value.trim();

  const results = await fetchBooks({ search: searchQuery, publisher: selectedPublisher });

  bookList.innerHTML = "";
  results.forEach((book) => bookList.append(createBook(book)));
  setBooksNum(results);
});

  


  searchInput.addEventListener("input", async (event) => {
    let searchQuery = "";
    searchQuery = searchInput.value;
    const results = await fetchBooks({ search: searchQuery });
    console.log(results);
    bookList.innerHTML = ``;
    results.forEach((book) => {
      const newBook = createBook(book);
      bookList.append(newBook);
    });
    setBooksNum(results);
  });
}

async function main() {
  const data = await fetchBooks();

  bookList.innerHTML = ``;
  data.forEach((book) => {
    const newBook = createBook(book);
    bookList.append(newBook);
  });

  setBooksNum(data);
  searchTitle(data);
}
main();
