import { useEffect, useState } from 'react';
import axios from 'axios';

function Content(props) {

  const [books, setBooks] = useState([]);

  useEffect(() => {

    async function getBooks() {
      const config = {
        method: 'get',
        baseURL: import.meta.env.VITE_SERVER_URL,
        url: '/books'
      }

      const booksResponse = await axios(config);

      setBooks(booksResponse.data);
    }

    getBooks();

  }, []);

  return (
    <>
      <h1>Books We Love</h1>
      <ul>
        {books.map(book => (
          <li key={book._id}>{book.title}</li>
        ))}
      </ul>
    </>
  );
 }

 export default Content;
