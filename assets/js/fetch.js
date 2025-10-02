export default async function fetchBooks() {
  // bookList.inHTML ="";

  const response = await fetch(`http://localhost:4730/books`);

  const data = await response.json();
  return data;
}
