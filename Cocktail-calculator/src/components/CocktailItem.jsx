const CocktailItem = ({ cocktail }) => {
  return (
    <div>
      <h2>{cocktail.name}</h2>
      <p>{cocktail.description}</p>
      <h3>Ingredients:</h3>
      <ul>
        {cocktail.ingredientNames.map((ingredientName, index) => (
          <li key={index}>
            {ingredientName} - Quantity:{" "}
            {cocktail.cocktailIngredients[index].quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CocktailItem;
