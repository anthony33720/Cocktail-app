package org.example.cocktailcalculatorbackend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
@Table(name = "cocktail_ingredients")
public class CocktailIngredients {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer cocktailIngredientsId;

    @JsonBackReference
    @ManyToOne(optional = false)
    @JoinColumn
    private Cocktail cocktail;

    @JsonBackReference
    @ManyToOne(optional = false)
    @JoinColumn
    private Ingredient ingredient;

    @Column
    private Double quantity;

    public Integer getCocktailIngredientsId() {
        return cocktailIngredientsId;
    }

    public CocktailIngredients() {
    }

    public CocktailIngredients(Ingredient ingredient, Double quantity) {
        this.ingredient = ingredient;
        this.quantity = quantity;
    }

    public void setCocktailIngredientsId(Integer cocktailIngredientsId) {
        this.cocktailIngredientsId = cocktailIngredientsId;
    }

    public Cocktail getCocktail() {
        return cocktail;
    }

    public void setCocktail(Cocktail cocktail) {
        this.cocktail = cocktail;
    }

    public Ingredient getIngredient() {
        return ingredient;
    }

    public void setIngredient(Ingredient ingredient) {
        this.ingredient = ingredient;
    }

    public Double getQuantity() {
        return quantity;
    }

    public void setQuantity(Double quantity) {
        this.quantity = quantity;
    }
}
