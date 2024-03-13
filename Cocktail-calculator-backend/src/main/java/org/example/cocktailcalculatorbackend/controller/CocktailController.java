package org.example.cocktailcalculatorbackend.controller;

import org.example.cocktailcalculatorbackend.model.Cocktail;
import org.example.cocktailcalculatorbackend.service.CocktailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

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
        System.out.println("Getting all cocktails!");
        List<Cocktail> cocktails = cocktailService.getAllCocktails();
        cocktails.stream().forEach(c-> System.out.println("cocktails = " + c.getName()));
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
    public ResponseEntity<Cocktail> createCocktail(@RequestBody Cocktail cocktail) {
        Cocktail createdCocktail = cocktailService.createCocktail(cocktail);
        return ResponseEntity.created(URI.create("/api/cocktails/" + cocktail.getId())).body(createdCocktail);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCocktailById(@PathVariable String id) {
        cocktailService.deleteCocktailById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
