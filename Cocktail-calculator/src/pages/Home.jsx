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
      <div className="">
        {/*<img src="/Home_background.jpeg" alt="Calculator" className="blur-sm z--1"/>*/}
        <Header title="Cocktail Calculator"/>
        <div className={"grid justify-center m-20"}>
          <Dropdown
              options={cocktails}
              onSelect={handleCocktailChange}
              value={selectedCocktail ? selectedCocktail.id : ""}
          /></div>
        <div className={"grid justify-center m-20"}>
          <QuantityInput value={quantity} onChange={handleQuantityChange}/></div>
        <div>
          {selectedCocktail && (
              <IngredientsDisplay cocktail={selectedCocktail} numCocktails={quantity}/>
          )}</div>
      </div>
  );
};

export default Home;
