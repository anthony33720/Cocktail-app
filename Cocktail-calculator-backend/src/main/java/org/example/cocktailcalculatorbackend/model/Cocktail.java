package org.example.cocktailcalculatorbackend.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "cocktails")
public class Cocktail {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String name;

    @OneToMany(mappedBy = "cocktail", cascade = {CascadeType.MERGE, CascadeType.REMOVE})
    private List<CocktailIngredients> cocktailIngredients;

    public Cocktail() {
    }

    public Cocktail(String id, List<CocktailIngredients> cocktailIngredients) {
        this.id = id;
        this.cocktailIngredients = cocktailIngredients;
    }

    public Cocktail(String id, String description, String name, List<CocktailIngredients> cocktailIngredients) {
        this.id = id;
        this.description = description;
        this.name = name;
        this.cocktailIngredients = cocktailIngredients;
    }

    public List<CocktailIngredients> getCocktailIngredients() {
        return cocktailIngredients;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCocktailIngredients(List<CocktailIngredients> cocktailIngredients) {
        this.cocktailIngredients = cocktailIngredients;
    }
}
