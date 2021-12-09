import { recipes } from "./data";

// affichage des ingrédients dans le dropdown 
const displayIngredients = (ingredients) => {
    const divDropIngredients = document.querySelector('.dropdown-child-ingredients');
    divDropIngredients.innerText = '';

    for (const ingredient of ingredients) {
        const a = document.createElement('a');
        a.innerText = ingredient.ingredient;

        divDropIngredients.appendChild(a);
    }    
}

// affichage des appareils dans le dropdown
const displayAppareil = (appareils) => {
    const divDropAppareils = document.querySelector('.dropdown-child-appareil');
    divDropAppareils.innerText = ''; 

    for (const appareil of appareils) {
        const a = document.createElement('a');
//        let titre = appareil.appliance;
        a.innerText = appareil;

        divDropAppareils.appendChild(a);
    }
}

// affichage des ustensiles dans le dropdown
const displayUstensiles = (ustensiles) => {
    const divDropUstensiles = document.querySelector('.dropdown-child-ustensiles');
    divDropUstensiles.innerText = '';

   for (const ustensil of ustensiles) {
        const a = document.createElement('a');
        a.innerText = ustensil;

        divDropUstensiles.appendChild(a);
    }    
}

export const displayTag = (recipes) => {
    const ingredients = recipes.map(recipe => recipe.ingredients).flat();
    console.log(ingredients);

    const appareils = recipes.map(recipe => recipe.appliance);
    console.log(appareils);

    const ustensiles = recipes.map(recipe => recipe.ustensils).flat();
    console.log(ustensiles);

    displayIngredients(new Set(ingredients));
    displayAppareil(new Set(appareils));
    displayUstensiles(new Set(ustensiles));
}