import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import CocktailList from "../components/CocktailList";
import Filter from "../components/Filter";
import CocktailItem from "../components/CocktailItem";
import MyListButton from "../components/MyListButton";
import MyListModal from "../components/MyListModal";

const Recipes = () => {
  const [cocktails, setCocktails] = useState([]);
  const [filteredCocktails, setFilteredCocktails] = useState([]);
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const [filterType, setFilterType] = useState("");
  const [showMyList, setShowMyList] = useState(false);

  useEffect(() => {
    // Fetch cocktails from backend API
    // Example:
    // fetchCocktails().then(data => setCocktails(data));
    // Replace fetchCocktails with your API call
    const mockCocktails = [
      {
        id: 1,
        name: "Mojito",
        description: "A refreshing cocktail with lime and mint",
      },
      {
        id: 2,
        name: "Martini",
        description: "A classic cocktail made with gin and vermouth",
      },
      {
        id: 3,
        name: "Daiquiri",
        description: "A simple cocktail with rum, lime, and sugar",
      },
    ];
    setCocktails(mockCocktails);
    setFilteredCocktails(mockCocktails);
  }, []);

  const handleFilterChange = (event) => {
    const type = event.target.value;
    setFilterType(type);
    if (type === "az") {
      setFilteredCocktails(
        [...cocktails].sort((a, b) => a.name.localeCompare(b.name))
      );
    } else if (type === "za") {
      setFilteredCocktails(
        [...cocktails].sort((a, b) => b.name.localeCompare(a.name))
      );
    }
    // Add more filters as needed
  };

  const handleCocktailClick = (cocktail) => {
    setSelectedCocktail(cocktail);
  };

  const handleMyListClick = () => {
    setShowMyList(true);
  };

  const handleCloseMyList = () => {
    setShowMyList(false);
  };

  return (
    <div>
      <Header title="Recipes" />
      <Filter onChange={handleFilterChange} />
      <CocktailList cocktails={filteredCocktails} />
      {selectedCocktail && <CocktailItem cocktail={selectedCocktail} />}
      <MyListButton onClick={handleMyListClick} />
      {showMyList && (
        <MyListModal cocktails={cocktails} onClose={handleCloseMyList} />
      )}
    </div>
  );
};

export default Recipes;
