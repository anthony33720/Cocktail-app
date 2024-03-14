import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import QuantityInput from "../components/QuantityInput";
import CocktailItem from "../components/CocktailItem";
import { fetchCocktails } from "../services/Api";

const Home = () => {
  const [cocktails, setCocktails] = useState([]);
  const [selectedCocktail, setSelectedCocktail] = useState("");
  const [quantity, setQuantity] = useState(1);

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

  return (
    <div>
      <Header title="Cocktail Calculator" />
      <Dropdown
        options={cocktails}
        onSelect={handleCocktailChange}
        value={selectedCocktail ? selectedCocktail.id : ""}
      />
      <QuantityInput value={quantity} onChange={handleQuantityChange} />
      {selectedCocktail && (
        <CocktailItem cocktail={selectedCocktail} numCocktails={quantity} />
      )}
    </div>
  );
};

export default Home;
