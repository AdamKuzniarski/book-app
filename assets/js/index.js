import { createDetail } from "./details.js";
import fetchBooks from "./fetch.js";


function createBook(info) {
  const tr = document.createElement("tr");
  const title = info.title;
  const isbn = info.isbn;
  const author = info.author;
  const publisher = info.publisher;
  const id = info.id;
  tr.innerHTML = `
  

            <thead>
              <tr>
                <th class="first-col">&nbsp;</th>
                <td>${title}</td>
                <td>${isbn}</td>
                <td>${author}</td>
                <td>${publisher}</td>
                <td>
                 <button onclick="location.href='detail.html?isbn=${isbn}'">Detail</button>
                </td>
                
              </tr>
            </thead>
            <tbody>
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
                
                </tr>
                </tbody>
              

  `;
  return tr;
}


async function main(){
const data = await fetchBooks();
const bookList = document.getElementById("book-list");
bookList.innerHTML= ``
  data.forEach((book) => {
    const newBook = createBook(book);
    bookList.append(newBook);
   // createDetail(book);
  });
}

main();








