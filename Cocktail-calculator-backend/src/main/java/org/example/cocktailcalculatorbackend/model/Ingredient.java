package org.example.cocktailcalculatorbackend.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.List;
import java.util.Objects;

@Entity
@Table( name = "ingredients")
public class Ingredient {


    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = true)
    private String description;

    @JsonManagedReference
    @OneToMany(mappedBy = "ingredient", cascade = CascadeType.REMOVE)
    private List<CocktailIngredients> cocktailIngredients;

    public Ingredient() {
    }

    public Ingredient(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public Ingredient(String name, String description, List<CocktailIngredients> cocktailIngredients) {
        this.name = name;
        this.description = description;
        this.cocktailIngredients = cocktailIngredients;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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
        return id.equals(ingredient.id) && name.equals(ingredient.name)
                && description.equals(ingredient.description);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, description);
    }
}
