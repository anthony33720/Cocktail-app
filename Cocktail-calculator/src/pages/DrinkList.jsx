import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import CocktailList from "../components/CocktailList";
import Filter from "../components/Filter";
import CocktailItem from "../components/CocktailItem";
import AddCocktailModal from "../components/AddCocktailModal";

const DrinkList = () => {
  const [cocktails, setCocktails] = useState([]);
  const [filteredCocktails, setFilteredCocktails] = useState([]);
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [filterType, setFilterType] = useState("az");

  const cocktailDetailsRef = useRef(null);

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
    setFilterType("az");
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
  };

  const handleCocktailClick = (cocktail) => {
    setSelectedCocktail(cocktail);
  };

  const handleAddCocktail = (newCocktail) => {
    setCocktails([...cocktails, newCocktail]);
    setFilteredCocktails([...filteredCocktails, newCocktail]);
    setShowAddModal(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        selectedCocktail &&
        cocktailDetailsRef.current &&
        !cocktailDetailsRef.current.contains(event.target) &&
        event.target.tagName !== "H3"
      ) {
        setSelectedCocktail(null);
      }
    };

    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [selectedCocktail]);

  const handleCloseModal = () => {
    setShowAddModal(false);
  };
  return (
    <div>
      <Header title="Cocktail encyclopedia" />
      <Filter onChange={handleFilterChange} />
      <CocktailList
        cocktails={filteredCocktails}
        onCocktailClick={handleCocktailClick}
      />
      {selectedCocktail && (
        <div ref={cocktailDetailsRef}>
          <CocktailItem cocktail={selectedCocktail} />
        </div>
      )}
      <button onClick={() => setShowAddModal(true)}>Add Cocktail</button>
      {showAddModal && (
        <AddCocktailModal
          onSave={handleAddCocktail}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default DrinkList;
