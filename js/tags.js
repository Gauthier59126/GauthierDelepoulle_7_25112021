const displayIngredients = (ingredients) => {
    const divDropIngredients = document.querySelector('.dropdown-child-ingredients');
    divDropIngredients.innerText = '';

    for (const ingredient of ingredients) {
        const a = document.createElement('a');
        a.innerText = ingredient.ingredient;

        divDropIngredients.appendChild(a);
    }    
}

export const displayTag = (recipes) => {
    const ingredients = recipes.map(recipe => recipe.ingredients).flat();
    console.log(ingredients);

    displayIngredients(ingredients);
}