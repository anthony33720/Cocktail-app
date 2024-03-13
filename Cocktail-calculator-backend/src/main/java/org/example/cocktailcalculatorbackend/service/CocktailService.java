package org.example.cocktailcalculatorbackend.service;

import org.example.cocktailcalculatorbackend.model.Cocktail;
import java.util.List;

public interface CocktailService {
    List<Cocktail> getAllCocktails();
    Cocktail getCocktailById(String id);
    Cocktail createCocktail(Cocktail cocktail);
    void deleteCocktailById(String id);
}

