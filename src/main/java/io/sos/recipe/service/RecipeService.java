package io.sos.recipe.service;

import io.sos.recipe.dto.RecipeDto;
import io.sos.recipe.dto.RecipeIngredientDto;
import io.sos.recipe.entity.Ingredient;
import io.sos.recipe.entity.Recipe;
import io.sos.recipe.entity.RecipeIngredient;
import io.sos.recipe.repository.IngredientRepository;
import io.sos.recipe.repository.RecipeRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RecipeService {

    private RecipeRepository recipeRepository;

    private IngredientRepository ingredientRepository;

    public RecipeService(RecipeRepository recipeRepository, IngredientRepository ingredientRepository) {
        this.recipeRepository = recipeRepository;
        this.ingredientRepository = ingredientRepository;
    }

    public Recipe saveRecipe(RecipeDto recipeDto) {
        Recipe recipe = new Recipe();
        recipe.setTitle(recipeDto.title());
        recipe.setDescription(recipeDto.description());
        recipe.setInstructions(recipeDto.instructions());

        List<RecipeIngredient> recipeIngredients = new ArrayList<>();

        for (RecipeIngredientDto ingredientDto : recipeDto.ingredients()) {
            Ingredient ingredient = ingredientRepository
                    .findByName(ingredientDto.ingredientName())
                    .orElseGet(() -> {
                        Ingredient newIngredient = new Ingredient();
                        newIngredient.setName(ingredientDto.ingredientName());
                        return ingredientRepository.save(newIngredient);
                    });

            RecipeIngredient recipeIngredient = new RecipeIngredient();
            recipeIngredient.setRecipe(recipe);
            recipeIngredient.setIngredient(ingredient);
            recipeIngredient.setQuantity(ingredientDto.quantity());

            recipeIngredients.add(recipeIngredient);
        }

        recipe.setRecipeIngredients(recipeIngredients);
        return recipeRepository.save(recipe);
    }
}

