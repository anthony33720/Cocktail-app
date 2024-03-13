package org.example.cocktailcalculatorbackend.service;

import org.example.cocktailcalculatorbackend.model.Cocktail;
import org.example.cocktailcalculatorbackend.repository.CocktailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class CocktailServiceImpl implements CocktailService {

    private final CocktailRepository cocktailRepository;

    @Autowired
    public CocktailServiceImpl(CocktailRepository cocktailRepository) {
        this.cocktailRepository = cocktailRepository;
    }

    @Override
    public List<Cocktail> getAllCocktails() {
        return cocktailRepository.findAll();
    }

    @Override
    public Cocktail getCocktailById(String id) {
        Optional<Cocktail> optionalCocktail = cocktailRepository.findById(id);
        return optionalCocktail.orElse(null);
    }

    @Override
    public Cocktail createCocktail(Cocktail cocktail) {
        return cocktailRepository.save(cocktail);
    }

    @Override
    public void deleteCocktailById(String id) {
        cocktailRepository.deleteById(id);
    }
}
