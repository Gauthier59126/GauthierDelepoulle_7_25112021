import { displayRecipes } from "./recette";
//import { displayTag } from "./tags";
import { recipes } from "./data";

const recipesConteneur = document.querySelector('.conteneur-recettes');
const searchBar = document.getElementById('searchBar');
const dropdownSearchBar = document.getElementById('.dropdown-search-bar');
const dropdownElements = document.getElementById('dropdown-elements');
const divTag = document.querySelector('.div-tag');
const closeBtn = document.querySelector('.close-btn');
let selectedAppareil = [];
let selectedIngredient = [];
let selectedUstensile = [];
let inputValue = '';
let filterRecipes = recipes;

// Algo de recherche 1

searchBar.addEventListener('input', (e) => {
    const searchString = e.target.value;
    if (searchString.length >= 3) {
        searchByInput(searchString);
    }
})

// recherche ene affichant le resultat
const searchByInput = (input) => {
    processSearchByInput(input);
    displayRecipes(filterRecipes);
}

// recherche sans afficher le resultat
const processSearchByInput = (input) => {
    inputValue = input;
    const normalizeInput = normalize(input);

    filterRecipes = [];
    for (const recipe of recipes) {
        if (searchByName(normalizeInput, recipe) || searchByDescription(normalizeInput, recipe) 
        || searchByIngredient(normalizeInput, recipe)) {
          filterRecipes.push(recipe);
        }
    }

    return filterRecipes;
}

const searchByName = (input, recipe) => {
    return normalize(recipe.name).includes(input); 
}

const searchByDescription = (input, recipe) => {
    return normalize(recipe.description).includes(input);
}

const searchByIngredient = (input, recipe) =>{
/*    const ingredientNames = recipe.ingredients.map(ingredient => ingredient.ingredient);
    return ingredientNames.some(name => normalize(name).includes(input));*/
    
    let exist = false;
    for (const ingredient of recipe.ingredients) {
        if (normalize(ingredient.ingredient).includes(input)) {
            exist = true;
        }
    }
    return exist;
}

// pour les caractères spéciaux
const normalize = (text) => {
    return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export const searchByTag = (tag, tagType) =>{
    switch (tagType) {
        case 'appareil':
            searchByAppareil(tag);
            selectedAppareil.push(tag)
            break;

        case 'ustensile':
            searchByUstensile(tag);
            selectedUstensile.push(tag);
            break;

        case 'ingredient':
            sortByIngredient(tag);
            selectedIngredient.push(tag);
            break;    
    
        default:
            break;
    }
    displayRecipes(filterRecipes);
}

const searchByAppareil = (appareil) =>{
    filterRecipes = filterRecipes.filter(recipe => recipe.appliance.includes(appareil));
    return filterRecipes;
}

const searchByUstensile = (ustensile) =>{
    filterRecipes = filterRecipes.filter(recipe => recipe.ustensils.includes(ustensile));
    return filterRecipes;
}

const sortByIngredient = (ingredient) => {
    console.log(ingredient);
    filterRecipes = filterRecipes.filter( recipe => searchByIngredient(normalize(ingredient), recipe));
    return filterRecipes;
}

// fonction reset de la recherche par tag
 export const removeTag = (tag, tagType) => {
    switch (tagType) {
        case 'appareil':            
            selectedAppareil = selectedAppareil.filter(appareil => appareil != tag);
            break;

        case 'ustensile':
            selectedUstensile = selectedUstensile.filter(ustensile => ustensile != tag);
            break;

        case 'ingredient':
            selectedIngredient = selectedIngredient.filter(ingredient => ingredient != tag);
            break;    
    
        default:
            break;
    }
    resetSearch();
}

// reset la recherche lorsqu'on enlève un tag ou une lettre
const resetSearch = () => {
    filterRecipes = recipes;
    filterRecipes = processSearchByInput(inputValue);

    searchByAllSelectedIngredients();
    searchByAllSelectedAppareils();
    searchByAllSelectedUstensiles();
    displayRecipes(filterRecipes);   
}

const searchByAllSelectedIngredients = () => {
    for (const ingredient of selectedIngredient) {
        filterRecipes = sortByIngredient(ingredient);
    }
}

const searchByAllSelectedAppareils = () => {
    for (const appareil of selectedAppareil) {
        filterRecipes = searchByAppareil(appareil);
    }
}

const searchByAllSelectedUstensiles = () => {
    for (const ustensile of selectedUstensile) {
        filterRecipes = searchByUstensile(ustensile);
    }
}

// Algo de recherche 2
/*




// close tag function
closeBtn.addEventListener('click', closeTag());
function closeTag(){
    divTag.style.display = 'none';
}

 searchBar.addEventListener('input', (e) => {
    const searchString = e.target.value;
    if (searchString.length >= 3) {
        forSearchByInput(searchString);
    }
})

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
*/ 
  