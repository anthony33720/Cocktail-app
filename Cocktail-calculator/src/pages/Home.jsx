import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import QuantityInput from "../components/QuantityInput";
import DisplayBox from "../components/DisplayBox";

const Home = () => {
  const [cocktails, setCocktails] = useState([]);
  const [selectedCocktail, setSelectedCocktail] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    // Fetch cocktails from backend API
    // Example:
    // fetchCocktails().then(data => setCocktails(data));
    // Replace fetchCocktails with your API call
    const mockCocktails = [
      { id: 1, name: "Mojito" },
      { id: 2, name: "Martini" },
      { id: 3, name: "Daiquiri" },
    ];
    setCocktails(mockCocktails);
  }, []);

  useEffect(() => {
    // Fetch ingredients based on selected cocktail and quantity
    // Example:
    // fetchIngredients(selectedCocktail, quantity).then(data => setIngredients(data));
    // Replace fetchIngredients with your API call
    if (selectedCocktail) {
      // Assuming selectedCocktail is an object with id and name properties
      // Here we are mocking ingredients data based on selected cocktail
      let mockIngredients = [];
      if (selectedCocktail.name === "Mojito") {
        mockIngredients = [
          { name: "rum", quantity: 5 },
          { name: "lime juice", quantity: 3 },
          { name: "simple syrup", quantity: 2 },
        ];
      } else if (selectedCocktail.name === "Martini") {
        mockIngredients = [
          { name: "gin", quantity: 6 },
          { name: "vermouth", quantity: 3 },
        ];
      } else if (selectedCocktail.name === "Daiquiri") {
        mockIngredients = [
          { name: "rum", quantity: 6 },
          { name: "lime juice", quantity: 3 },
          { name: "simple syrup", quantity: 2 },
        ];
      }
      setIngredients(mockIngredients);
    }
  }, [selectedCocktail, quantity]);

  const handleCocktailChange = (event) => {
    const selectedCocktailId = parseInt(event.target.value);
    const cocktail = cocktails.find((c) => c.id === selectedCocktailId);
    setSelectedCocktail(cocktail);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <div>
      <Header title="Cocktail Calculator" />
      <Dropdown
        options={cocktails}
        onSelect={handleCocktailChange}
        value={selectedCocktail.id}
      />
      <QuantityInput value={quantity} onChange={handleQuantityChange} />
      <DisplayBox ingredients={ingredients} numCocktails={quantity} />
    </div>
  );
};

export default Home;
