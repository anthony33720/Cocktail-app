import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import QuantityInput from "../components/QuantityInput";
import { fetchCocktails } from "../services/Api";
import IngredientsDisplay from "../components/IngredientsDisplay.jsx";

const Home = () => {
  const [cocktails, setCocktails] = useState([]);
  const [selectedCocktail, setSelectedCocktail] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [savedResults, setSavedResults] = useState([]);

  useEffect(() => {
    fetchCocktails()
        .then((data) => {
          setCocktails(data);
        })
        .catch((error) => console.error("Error fetching cocktails:", error));
  }, []);

  const handleCocktailChange = (event) => {
    const selectedCocktailId = event.target.value;
    const cocktail = cocktails.find((c) => c.id === selectedCocktailId);
    setSelectedCocktail(cocktail || null);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleSave = () => {
    if (!selectedCocktail) {
      console.error("No cocktail selected.");
      return;
    }

    const ingredientsToSave = selectedCocktail.ingredientNames.map((ingredientName, index) => ({
      name: ingredientName,
      quantity: selectedCocktail.cocktailIngredients[index].quantity * quantity
    }));


    const updatedResults = [...savedResults];

    ingredientsToSave.forEach((ingredient) => {
      const existingIngredientIndex = updatedResults.findIndex((item) => item.name === ingredient.name);
      if (existingIngredientIndex === -1) {
        updatedResults.push(ingredient);
      } else {
        updatedResults[existingIngredientIndex].quantity += ingredient.quantity;
      }
    });
    setSavedResults(updatedResults);
  };

  return (
      <div>
        <Header title="Cocktail Calculator"/>
        <div className={"grid justify-center m-20"}>
          <Dropdown
              options={cocktails}
              onSelect={handleCocktailChange}
              value={selectedCocktail ? selectedCocktail.id : ""}
          />
        </div>
        <div className={"grid justify-center m-20"}>
          <QuantityInput value={quantity} onChange={handleQuantityChange}/>
        </div>
        <div className={"grid grid-cols-2"}>
        <div className={"col-start-1"}>
          {selectedCocktail && (
              <IngredientsDisplay cocktail={selectedCocktail} numCocktails={quantity}/>
          )}
        </div><div className={`col-start-2 m-2 p-2 ${selectedCocktail ? 'border-2 rounded-lg' : ''}`}>
            {selectedCocktail && (
                <button className={"border-2 bg-gray-700 text-white w-full"} onClick={handleSave}>Save Ingredients</button>
            )}
            {savedResults.length > 0 && (
                <div>
                    <h2 className={"font-bold p-3 text-2xl"}>Quantity of ingredients to order:</h2>
                    <ul>
                        {savedResults.map((ingredient, index) => (
                            <li  className={"border-b-4"} key={index}>{ingredient.name}: {ingredient.quantity.toFixed(2)}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
        </div>
      </div>
  );
};

export default Home;
