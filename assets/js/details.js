const detailContainer = document.getElementById("detail-container");

export function createDetail(detail) {
  //detailContainer.innerHTML = "";
  const mainElement = document.createElement("main");

  const id = detail.id;
  const title = detail.title;
  const subtitle = detail.subtitle;
  const isbn = detail.isbn;
  const abstract = detail.abstract;
  const author = detail.author;
  const publisher = detail.publisher;
  const price = detail.price;
  const numPages = detail.numPages;
  const cover = detail.cover;
  const userId = detail.userId;

  mainElement.innerHTML = `

      <h1>
        ${title}<br />
        <small>${subtitle}</small>
      </h1>
      <section class="row">
        <div class="column column-67">
          <h3>Abstract</h3>
          <p>
           ${abstract}
          </p>

          <h4>Details</h4>
          <ul>
            <li><strong>Author:</strong> ${author}</li>
            <li><strong>Publisher:</strong> ${publisher}</li>
            <li><strong>Pages:</strong> ${numPages}</li>
          </ul>

          <button
            class="button button-outline"
            onclick="location.href='index.html'"
          >
            Back
          </button>
        </div>
        <div class="column column-33">
          <img src=${cover} alt=${title} />
        </div>
      </section>


`;
  mainElement.append(detailContainer);
  return mainElement;
}


 function getIsbnFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("isbn");
} 

async function main(){
//hol die isbn
//fetch buch mit isbn
// setz die detailspage ums
}
main();