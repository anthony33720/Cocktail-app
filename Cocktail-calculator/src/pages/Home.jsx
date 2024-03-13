import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import QuantityInput from "../components/QuantityInput";
import DisplayBox from "../components/DisplayBox";
import { fetchCocktails } from "../services/Api";

const Home = () => {
  const [cocktails, setCocktails] = useState([]);
  const [selectedCocktail, setSelectedCocktail] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetchCocktails()
      .then((data) => {
        setCocktails(data);
        setSelectedCocktail(data[0]);
      })
      .catch((error) => console.error("Error fetching cocktails:", error));
  }, []);

  useEffect(() => {}, [selectedCocktail, quantity]);

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
