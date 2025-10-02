
/* export default async function fetchBooks({isbn = "", search=""}) {
  const response = await fetch(
    `http://localhost:4730/books?q=${search}/${isbn}`
  );
  const data = await response.json();
  return data;
} */
export default async function fetchBooks({ isbn = "", search = "", publisher = "" } = {}) {
  const params = new URLSearchParams();
  if (search) params.set("q", search);      // JSON-Server: Volltextsuche
  if (isbn)   params.set("isbn", isbn);     // genaue ISBN (falls deine API das kann)
  if (publisher) params.set("publisher", publisher);
  const response = await fetch(`http://localhost:4730/books?${params.toString()}`);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return await response.json();
}
