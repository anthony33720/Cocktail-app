package org.example.cocktailcalculatorbackend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "cocktail_ingredients")
public class CocktailIngredients {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer cocktailIngredientsId;

    @ManyToOne(optional = false)
    @JoinColumn
    private Cocktail cocktail;

    @ManyToOne(optional = false)
    @JoinColumn
    private Ingredient ingredient;

    @Column
    private Double quantity;

    public Integer getCocktailIngredientsId() {
        return cocktailIngredientsId;
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
