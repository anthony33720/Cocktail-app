import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import CocktailList from "../components/CocktailList";
import Filter from "../components/Filter";
import CocktailItem from "../components/CocktailItem";
import MyListButton from "../components/MyListButton";
import MyListModal from "../components/MyListModal";

const Recipes = ({ isAuthenticated }) => {
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
        description:
          "Build up in the glass, cover with crushed ice, top with soda water, garnish with mint tulip",
        ingredients: [
          { name: "Lime", amount: "3cl", description: "Freshly squeezed" },
          { name: "Mint", amount: "6 leaves", description: "Fresh" },
          { name: "Rum", amount: "5cl", description: "White rum" },
          {
            name: "Simple syrup",
            amount: "2cl",
            description: "Homemade 50/50",
          },
          { name: "Soda water", amount: "10cl", description: "Chilled" },
        ],
      },
      {
        id: 2,
        name: "Gin fizz",
        description:
          "Dry shake then shake with ice, poor in a rock glass with ice cubes",
        ingredients: [
          {
            name: "Lemon juice",
            amount: "3cl",
            description: "Freshly squeezed",
          },
          { name: "Gin", amount: "5cl", description: "fresh and junipery" },
          {
            name: "Simple syrup",
            amount: "2cl",
            description: "Homemade 50/50",
          },
          { name: "Egg white", amount: "1", description: "For the foam" },
        ],
      },
      {
        id: 3,
        name: "Atest",
        description: "A refreshing cocktail with lime and mint",
        ingredients: [
          { name: "Lime", amount: "2 oz", description: "Freshly squeezed" },
          { name: "Mint", amount: "6 leaves", description: "Fresh" },
          { name: "Rum", amount: "2 oz", description: "White rum" },
          { name: "Simple syrup", amount: "1 oz", description: "Homemade" },
          { name: "Soda water", amount: "2 oz", description: "Chilled" },
        ],
      },
      {
        id: 4,
        name: "Ctest",
        description: "A refreshing cocktail with lime and mint",
        ingredients: [
          { name: "Lime", amount: "2 oz", description: "Freshly squeezed" },
          { name: "Mint", amount: "6 leaves", description: "Fresh" },
          { name: "Rum", amount: "2 oz", description: "White rum" },
          { name: "Simple syrup", amount: "1 oz", description: "Homemade" },
          { name: "Soda water", amount: "2 oz", description: "Chilled" },
        ],
      },
      {
        id: 5,
        name: "Ztest",
        description: "A refreshing cocktail with lime and mint",
        ingredients: [
          { name: "Lime", amount: "2 oz", description: "Freshly squeezed" },
          { name: "Mint", amount: "6 leaves", description: "Fresh" },
          { name: "Rum", amount: "2 oz", description: "White rum" },
          { name: "Simple syrup", amount: "1 oz", description: "Homemade" },
          { name: "Soda water", amount: "2 oz", description: "Chilled" },
        ],
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
      <CocktailList
        cocktails={filteredCocktails}
        onCocktailClick={handleCocktailClick}
      />
      {selectedCocktail && <CocktailItem cocktail={selectedCocktail} />}
      {isAuthenticated && <MyListButton onClick={handleMyListClick} />}
      {showMyList && (
        <MyListModal cocktails={cocktails} onClose={handleCloseMyList} />
      )}
    </div>
  );
};

export default Recipes;
