import { useState } from 'react';
import axios from 'axios';
import './style.css';

function App() {
  const [shoppingList, setShoppingList] = useState([]);

  // Here's some non-dry methods to fetch different types of lists
  // How can we dry this out?
  // 1. We could make a single method that takes a type as a parameter
  // 2. We could make a single method and use the browsers' query string!

  async function getFood() {
    const API = 'http://localhost:3001';
    const response = await axios.get(`${API}/shoppingList?type=food`);
    setShoppingList(response.data);
  }

  async function getSupplies() {
    const API = 'http://localhost:3001';
    const response = await axios.get(`${API}/shoppingList?type=supplies`);
    setShoppingList(response.data);
  }

  // Goes along with the optional query string button -- do this only if time allows
  // This shows us passing a query string parameter from the browser all the way to the server
  // To demo this method, type `?type=supplies` or
  // `?type=food` in the url bar, after `localhost:3000/`
  // then click on the button to show the shopping list
  async function getShoppingListFromQueryString() {
    // grabs the query string from the url
    const search = window.location.search;
    // returns an object instance of URLSearchParams in order call the method .get
    const params = new URLSearchParams(search);
    // Returns the value of the parameter 'type' from the url
    // so that we can pass it to axios
    const listName = params.get('type');

    const API = 'http://localhost:3001';
    const response = await axios.get(`${API}/shoppingList?type=${listName}`);
    setShoppingList(response.data);
  }

  return (
    <>
      <button onClick={getFood}>Get Food List Directly</button>
      <button onClick={getSupplies}>Get Supplies List Directly</button>

      {/* Optional --- only code this out if time allows */}
      <button onClick={getShoppingListFromQueryString}>Get Shopping List via Browser Query String</button>

      <ul>
        {shoppingList.length && shoppingList.map((item, idx) => (
          <li key={idx}>
            <p>{item.name}: {item.description}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App;
