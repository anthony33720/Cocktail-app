package org.example.cocktailcalculatorbackend.model;

import java.util.List;

public record CocktailDTO(String name,
                          String description,
                          List<IngredientDTO> ingredients

                          ){

}

