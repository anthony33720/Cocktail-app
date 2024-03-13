package org.example.cocktailcalculatorbackend.model;

import jakarta.persistence.*;

import java.util.List;
import java.util.Objects;

@Entity
@Table( name = "ingredients")
public class Ingredient {


    @Id
    @Column
    private String ingredientId;

    @Column
    private String name;

    @Column
    private String description;

    @OneToMany(mappedBy = "ingredient", cascade = CascadeType.REMOVE)
    private List<CocktailIngredients> cocktailIngredients;

    public Ingredient() {
    }

    public Ingredient(String id, String name, String description) {
        this.ingredientId = id;
        this.name = name;
        this.description = description;
    }

    public Ingredient(String id, String name, String description, List<CocktailIngredients> cocktailIngredients) {
        this.ingredientId = id;
        this.name = name;
        this.description = description;
        this.cocktailIngredients = cocktailIngredients;
    }

    public String getIngredientId() {
        return ingredientId;
    }

    public void setIngredientId(String id) {
        this.ingredientId = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<CocktailIngredients> getCocktailIngredients() {
        return cocktailIngredients;
    }

    public void setCocktailIngredients(List<CocktailIngredients> cocktailIngredients) {
        this.cocktailIngredients = cocktailIngredients;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Ingredient ingredient)) {
            return false;
        }
        return ingredientId.equals(ingredient.ingredientId) && name.equals(ingredient.name)
                && description.equals(ingredient.description);
    }

    @Override
    public int hashCode() {
        return Objects.hash(ingredientId, name, description);
    }
}
