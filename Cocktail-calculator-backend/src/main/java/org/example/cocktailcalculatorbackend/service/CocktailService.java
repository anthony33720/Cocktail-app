package org.example.cocktailcalculatorbackend.service;

import org.example.cocktailcalculatorbackend.model.Cocktail;
import java.util.List;

public interface CocktailService {
    List<Cocktail> getAllCocktails();
    List<Cocktail> getAllCocktailsWithIngredients();
    Cocktail getCocktailById(String id);
    Cocktail createCocktail(Cocktail cocktail);
    void deleteCocktailById(String id);
}

