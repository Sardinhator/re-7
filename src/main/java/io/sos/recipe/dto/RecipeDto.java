package io.sos.recipe.dto;

import java.util.List;

public record RecipeDto(String title, String description, String instructions, List<RecipeIngredientDto> ingredients) {
}
