import { recipes } from "./data";
import { displayTag } from "./tags";
const recipeConteneur = document.querySelector('.conteneur-recettes');

const recipeName = (recipe) =>{
    const divNom = document.createElement('div');
    divNom.className = 'nom';

    const nom = document.createElement('h2');
    nom.innerText = recipe.name

    divNom.appendChild(nom);

    return divNom;
}

const recipeTime = (recipe) => {
    const divTemps = document.createElement('div');
    divTemps.className = 'temps';

    const icone = document.createElement('i');
    icone.className = 'far fa-clock'

    const temps = document.createElement('h2');
    temps.innerText = recipe.time + "min";

    divTemps.append(icone, temps);

    return divTemps;
}

const recipeIngredients = (recipe) => {
    const divIngredients = document.createElement('div');
    divIngredients.className = 'ingredients';

    for (const ingredient of recipe.ingredients) {
        const ingredients = document.createElement('h3');
        let text = ingredient.ingredient + ingredient.quantity;
        if(ingredient.unit){
            text += ingredient.unit;
        }

        ingredients.innerText = text;
        divIngredients.appendChild(ingredients);
    }

    return divIngredients;
}

const recipeMaking = (recipe) => {
    const divPreparation = document.createElement('div');
    divPreparation.className = 'preparation';

    const textPreparation = document.createElement('p');
    textPreparation.innerText = recipe.description;

    divPreparation.appendChild(textPreparation);

    return divPreparation;
}

const recipeDescription = (recipe) => {
    const divDescription = document.createElement('div');
    divDescription.className = 'description-recette';

    const divNom = recipeName(recipe)
    const divTemps = recipeTime(recipe);
    const divIngredients = recipeIngredients(recipe);
    const divPreparation = recipeMaking(recipe);

    divDescription.append(divNom, divTemps, divIngredients, divPreparation);

    return divDescription;
}

const recipeImage = () => {
    const divImage = document.createElement('div');
    divImage.className = 'div-img';
    divImage.src = "";

    return divImage;
}

const recette = (recipe) => {
    const divRecette = document.createElement('div');
    divRecette.className = 'recette';

    const divImage = recipeImage();
    const divDescription = recipeDescription(recipe);

    divRecette.append(divImage, divDescription);

    recipeConteneur.append(divRecette);
}

const displayRecipes = (recipesData) =>{
    const recipesToDisplay = recipesData || recipes;
    recipeConteneur.innerText = '';

    for (const recipe of recipesToDisplay) {
        recette(recipe)
    }

    displayTag(recipes);
}

(function init(){
    displayRecipes();
})()

