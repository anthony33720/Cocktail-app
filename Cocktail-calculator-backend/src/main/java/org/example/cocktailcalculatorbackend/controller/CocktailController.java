package org.example.cocktailcalculatorbackend.controller;

import org.example.cocktailcalculatorbackend.model.Cocktail;
import org.example.cocktailcalculatorbackend.model.CocktailDTO;
import org.example.cocktailcalculatorbackend.model.CocktailIngredients;
import org.example.cocktailcalculatorbackend.model.Ingredient;
import org.example.cocktailcalculatorbackend.service.CocktailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/cocktails")
@CrossOrigin
public class CocktailController {

    private final CocktailService cocktailService;

    @Autowired
    public CocktailController(CocktailService cocktailService) {
        this.cocktailService = cocktailService;
    }

    @GetMapping
    public ResponseEntity<List<Cocktail>> getAllCocktails() {
        List<Cocktail> cocktails = cocktailService.getAllCocktailsWithIngredients();
        cocktails.forEach(cocktail -> {
            List<String> ingredientNames = cocktail.getIngredientNames();
        });
        return ResponseEntity.ok().body(cocktails);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Cocktail> getCocktailById(@PathVariable String id) {
        Cocktail cocktail = cocktailService.getCocktailById(id);
        if (cocktail != null) {
            return new ResponseEntity<>(cocktail, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Cocktail> createCocktail(@RequestBody CocktailDTO cocktailDto) {
        List<CocktailIngredients> listIngredients = new ArrayList<>();

        cocktailDto.ingredients().forEach(ele -> {
            CocktailIngredients cI = new CocktailIngredients(
                    new Ingredient(ele.name(), ""), ele.quantity());
            listIngredients.add(cI);
        });

        Cocktail cocktail = new Cocktail(UUID.randomUUID().toString(),cocktailDto.description(),cocktailDto.name() , listIngredients);
         Cocktail createdCocktail = cocktailService.createCocktail(cocktail);
         return ResponseEntity.created(URI.create("api/cocktails/" + createdCocktail.getId())).body(createdCocktail);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCocktailById(@PathVariable String id) {
        cocktailService.deleteCocktailById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
