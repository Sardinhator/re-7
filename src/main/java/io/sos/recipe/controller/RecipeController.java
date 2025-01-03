package io.sos.recipe.controller;

import io.sos.recipe.dto.RecipeDto;
import io.sos.recipe.entity.Recipe;
import io.sos.recipe.service.RecipeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/recipes")
public class RecipeController {

    private RecipeService recipeService;

    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @PostMapping
    public ResponseEntity<Recipe> createRecipe(@RequestBody RecipeDto recipeDto) {
        Recipe recipe = recipeService.saveRecipe(recipeDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(recipe);
    }
}

