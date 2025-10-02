export default async function fetchBooks(isbn = "") {
  // bookList.inHTML ="";

  const response = await fetch(`http://localhost:4730/books/${isbn}`);

  const data = await response.json();
  return data;
}
