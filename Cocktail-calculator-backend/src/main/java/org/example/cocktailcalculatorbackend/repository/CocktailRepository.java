package org.example.cocktailcalculatorbackend.repository;

import org.example.cocktailcalculatorbackend.model.Cocktail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CocktailRepository extends JpaRepository<Cocktail, String> {
    @Query("SELECT c FROM Cocktail c LEFT JOIN FETCH c.cocktailIngredients ci LEFT JOIN FETCH ci.ingredient")
    List<Cocktail> getAllCocktailsWithIngredients();
}
