import { useEffect, useState } from 'react';
import { withAuth0, useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

function Content(props) {

  const {
    isAuthenticated,
  } = useAuth0();

  const [books, setBooks] = useState([]);

  async function getBooks() {

    const res = await props.auth0.getIdTokenClaims();
    console.log('res', res);
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

  // this will only run when we are authenticated
  // and it will run the getBooks() function above to get books
  useEffect(() => {
    if( isAuthenticated ) {
       getBooks();
    }
  }, [isAuthenticated]);

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

 export default withAuth0(Content);
