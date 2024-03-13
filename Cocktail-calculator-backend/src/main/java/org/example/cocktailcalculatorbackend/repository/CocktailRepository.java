package org.example.cocktailcalculatorbackend.repository;

import org.example.cocktailcalculatorbackend.model.Cocktail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CocktailRepository extends JpaRepository<Cocktail, String> {
}
