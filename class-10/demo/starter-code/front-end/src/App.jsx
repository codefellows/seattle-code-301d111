import { useState } from 'react';
import axios from 'axios';
import Recipe from './components/Recipe';

function App() {
  const [ingredient, setIngredient] = useState('');
  const [recipes, setRecipes] = useState([]);

  async function getRecipes(event) {
    event.preventDefault();
    const server = 'http://localhost:3001';
    const recipesResponse = await axios.get(`${server}/recipes`, { params: { ingredient: ingredient } });
    setRecipes(recipesResponse.data);
  }

  return (
    <>
      <form onSubmit={getRecipes}>
        <label>enter an ingredient</label>
        <input onChange={(event) => setIngredient(event.target.value)} type="text" name="ingredient"></input>
        <button>submit</button>
      </form>

      {recipes.map((recipe, idx) => (
        <Recipe
          key={idx}
          recipe={recipe}
        />
      ))
      }
    </>
  )
}

export default App;
