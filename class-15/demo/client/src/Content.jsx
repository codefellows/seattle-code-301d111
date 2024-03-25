import { useEffect, useState } from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

function Content(props) {

  const [books, setBooks] = useState([]);

  useEffect(async () => {

    if (props.auth0.isAuthenticated) {

      const res = await props.auth0.getIdTokenClaims();
      const jwt = res.__raw;

      const config = {
        headers: { "Authorization": `Bearer ${jwt}` },
        method: 'get',
        baseURL: import.meta.env.VITE_SERVER_URL,
        url: '/books'
      }

      const booksResponse = await axios(config);

      setBooks(booksResponse.data);

    }
  }, []);

  render() {
    <>
      <h1>Books We Love</h1>
      <ul>
        {books.map(book => (
          <li key={book._id}>{book.title}</li>
        ))}
      </ul>
    </>
    )
  }

  export default withAuth0(Content);
