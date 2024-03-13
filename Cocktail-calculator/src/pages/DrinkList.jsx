import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import CocktailList from "../components/CocktailList";
import Filter from "../components/Filter";
import CocktailItem from "../components/CocktailItem";
import AddCocktailModal from "../components/AddCocktailModal";
import { fetchCocktails, addCocktail } from "../services/Api";

const DrinkList = () => {
  const [cocktails, setCocktails] = useState([]);
  const [filteredCocktails, setFilteredCocktails] = useState([]);
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [filterType, setFilterType] = useState("az");

  const cocktailDetailsRef = useRef(null);

  useEffect(() => {
    fetchCocktails()
      .then((data) => {
        setCocktails(data);
        setFilteredCocktails(data);
      })
      .catch((error) => console.error("Error fetching cocktails:", error));

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
    addCocktail(newCocktail)
      .then((data) => {
        setCocktails([...cocktails, data]);
        setFilteredCocktails([...filteredCocktails, data]);
        setShowAddModal(false);
      })
      .catch((error) => console.error("Error adding cocktail:", error));
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
