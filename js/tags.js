import { recipes } from "./data";
import { searchByTag, removeTag } from "./recherche";

// affichage des ingrédients dans le dropdown 
const displayIngredients = (ingredients) => {
    const divDropIngredients = document.querySelector('.dropdown-child-ingredients');
    divDropIngredients.innerText = '';

    for (const ingredient of ingredients) {
        const a = document.createElement('a');
        a.innerText = ingredient.ingredient;
        a.className = 'dropdown-elements';
        a.addEventListener('click', (e) =>{
            addTagIngredient(e.target.innerText);
        })

        divDropIngredients.appendChild(a);
    }    
}

// Affichage du tag ingrédient sélectionné au dessus du dropdown
const addTagIngredient = (ingredient) =>{
    const divTag = document.createElement('div');
    divTag.className = 'div-tag t-ingredients';

    const titreTag = document.createElement('h2');
    titreTag.innerText = ingredient;

    const divClose = document.createElement('div');
    divClose.className = 'close-btn';

    const closeBtn = document.createElement('i');
    closeBtn.className = 'far fa-times-circle';
    
    divClose.addEventListener('click', (e) =>{
        removeTag(ingredient, 'ingredient');
        divTag.style.display = 'none';
    });
    divClose.appendChild(closeBtn);
    divTag.append(titreTag, divClose);

    const blockTags = document.querySelector('.block-tags');
    blockTags.append(divTag);

    searchByTag(ingredient, 'ingredient');
}

// affichage des appareils dans le dropdown
const displayAppareil = (appareils) => {
    const divDropAppareils = document.querySelector('.dropdown-child-appareil');
    divDropAppareils.innerText = ''; 

    for (const appareil of appareils) {
        const a = document.createElement('a');
        a.innerText = appareil;
        a.className = 'dropdown-elements';
        a.addEventListener('click', (e) =>{
            addTagAppareil(e.target.innerText);
        })

        divDropAppareils.appendChild(a);
    }
}

// Affichage du tag appareil sélectionné au dessus du dropdown
const addTagAppareil = (appareil) =>{
    const divTag = document.createElement('div');
    divTag.className = 'div-tag t-appareil';

    const titreTag = document.createElement('h2');
    titreTag.innerText = appareil;

    const divClose = document.createElement('div');
    divClose.className = 'close-btn';

    const closeBtn = document.createElement('i');
    closeBtn.className = 'far fa-times-circle';
    
    divClose.addEventListener('click', (e) =>{
        divTag.style.display = 'none';
        removeTag(appareil, 'appareil');
    });
    divClose.appendChild(closeBtn);
    divTag.append(titreTag, divClose);

    const blockTags = document.querySelector('.block-tags');
    blockTags.append(divTag);

    searchByTag(appareil, 'appareil');
}

// affichage des ustensiles dans le dropdown
const displayUstensiles = (ustensiles) => {
    const divDropUstensiles = document.querySelector('.dropdown-child-ustensiles');
    divDropUstensiles.innerText = '';

   for (const ustensile of ustensiles) {
        const a = document.createElement('a');
        a.innerText = ustensile;
        a.className = 'dropdown-elements';
        a.addEventListener('click', (e) =>{
            addTagUstensile(e.target.innerText);
        })

        divDropUstensiles.appendChild(a);
    }    
}

// Affichage du tag ustensil sélectionné au dessus du dropdown
const addTagUstensile = (ustensile) =>{
    const divTag = document.createElement('div');
    divTag.className = 'div-tag t-ustensiles';

    const titreTag = document.createElement('h2');
    titreTag.innerText = ustensile;

    const divClose = document.createElement('div');
    divClose.className = 'close-btn';

    const closeBtn = document.createElement('i');
    closeBtn.className = 'far fa-times-circle';
    
    divClose.addEventListener('click', (e) =>{
        divTag.style.display = 'none';
        removeTag(ustensile, 'ustensile');
    });
    divClose.appendChild(closeBtn);
    divTag.append(titreTag, divClose);

    const blockTags = document.querySelector('.block-tags');
    blockTags.append(divTag);

    searchByTag(ustensile, 'ustensile');
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