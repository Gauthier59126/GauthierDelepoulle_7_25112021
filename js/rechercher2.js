const forSearchByInput = (input) => {
    filterRecipes = [];
    const normalizeInput = normalize(input);
    for (const recipe of recipes) {
        if (searchByName(normalizeInput, recipe) || searchByDescription(normalizeInput, recipe) 
        || searchByIngredient(normalizeInput, recipe)) {
          filterRecipes.push(recipe);
        }
    }
    displayRecipes(filterRecipes)  ;
}