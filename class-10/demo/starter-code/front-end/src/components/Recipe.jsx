function Recipe(props) {

  return (
    <div>
      <h2><a href={props.recipe.uri}>{props.recipe.label}</a></h2>
      <img src={props.recipe.image_url} />
      <ul>
        {props.recipe.ingredients.map(ingredient => (
          <li key={Math.random()}>{ingredient}</li>
        ))}
      </ul>
    </div>
  )
}

export default Recipe;
