const BASE_URL = "http://localhost:3000/api";

async function fetchCocktails() {
  try {
    const response = await fetch(`${BASE_URL}/cocktails`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching cocktails:", error);
    throw error;
  }
}

async function addCocktail(cocktail) {
  try {
    const response = await fetch(`${BASE_URL}/cocktails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cocktail),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding cocktail:", error);
    throw error;
  }
}
// async function fetchSavedCocktails() {
//   try {
//     const response = await fetch(`${BASE_URL}/cocktails`);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching saved cocktails:", error);
//     throw error;
//   }
// }

export { fetchCocktails, addCocktail };
