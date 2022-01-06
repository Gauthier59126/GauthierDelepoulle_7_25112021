// eslint-disable-next-line import/no-cycle
import { displayRecipes, init } from './recette';
import { recipes } from './data';
import normalize from './normalize';

const searchBar = document.getElementById('searchBar');
let selectedAppareil = [];
let selectedIngredient = [];
let selectedUstensile = [];
let inputValue = '';
let filterRecipes = recipes;

// Algo de recherche 1

const searchByName = (input, recipe) => normalize(recipe.name).includes(input);

const searchByDescription = (input, recipe) => normalize(recipe.description).includes(input);

const searchByIngredient = (input, recipe) => {
  const ingredientNames = recipe.ingredients.map((ingredient) => ingredient.ingredient);
  return ingredientNames.some((name) => normalize(name).includes(input));
};

searchBar.addEventListener('input', (e) => {
  const searchString = e.target.value;
  if (searchString.length >= 3) {
    // eslint-disable-next-line no-use-before-define
    searchByInput(searchString);
  }
});

// recherche ene affichant le resultat
const searchByInput = (input) => {
  // eslint-disable-next-line no-use-before-define
  processSearchByInput(input);
  displayRecipes(filterRecipes);
};

// recherche sans afficher le resultat
const processSearchByInput = (input) => {
  inputValue = input;
  const normalizeInput = normalize(input);
  filterRecipes = recipes.filter((recipe) => searchByName(normalizeInput, recipe)
  || searchByDescription(normalizeInput, recipe) || searchByIngredient(normalizeInput, recipe));
  return filterRecipes;
};

export const searchByTag = (tag, tagType) => {
  switch (tagType) {
    case 'appareil':
      // eslint-disable-next-line no-use-before-define
      searchByAppareil(tag);
      selectedAppareil.push(tag);
      break;

    case 'ustensile':
      // eslint-disable-next-line no-use-before-define
      searchByUstensile(tag);
      selectedUstensile.push(tag);
      break;

    case 'ingredient':
      // eslint-disable-next-line no-use-before-define
      sortByIngredient(tag);
      selectedIngredient.push(tag);
      break;

    default:
      break;
  }
  displayRecipes(filterRecipes);
};

const searchByAppareil = (appareil) => {
  filterRecipes = filterRecipes.filter((recipe) => recipe.appliance.includes(appareil));
  return filterRecipes;
};

const searchByUstensile = (ustensile) => {
  filterRecipes = filterRecipes.filter((recipe) => recipe.ustensils.includes(ustensile));
  return filterRecipes;
};

const sortByIngredient = (ingredient) => {
  console.log(ingredient);
  // eslint-disable-next-line max-len
  filterRecipes = filterRecipes.filter((recipe) => searchByIngredient(normalize(ingredient), recipe));
  return filterRecipes;
};

// fonction reset de la recherche par tag
export const removeTag = (tag, tagType) => {
  switch (tagType) {
    case 'appareil':
      // eslint-disable-next-line eqeqeq
      selectedAppareil = selectedAppareil.filter((appareil) => appareil != tag);
      break;

    case 'ustensile':
      // eslint-disable-next-line eqeqeq
      selectedUstensile = selectedUstensile.filter((ustensile) => ustensile != tag);
      break;

    case 'ingredient':
      // eslint-disable-next-line eqeqeq
      selectedIngredient = selectedIngredient.filter((ingredient) => ingredient != tag);
      break;

    default:
      break;
  }
  // eslint-disable-next-line no-use-before-define
  resetSearch();
};

// reset la recherche lorsqu'on enlève un tag ou une lettre
const resetSearch = () => {
  filterRecipes = recipes;
  filterRecipes = processSearchByInput(inputValue);

  // eslint-disable-next-line no-use-before-define
  searchByAllSelectedIngredients();
  // eslint-disable-next-line no-use-before-define
  searchByAllSelectedAppareils();
  // eslint-disable-next-line no-use-before-define
  searchByAllSelectedUstensiles();
  displayRecipes(filterRecipes);
};

const searchByAllSelectedIngredients = () => {
  // eslint-disable-next-line no-restricted-syntax
  for (const ingredient of selectedIngredient) {
    filterRecipes = sortByIngredient(ingredient);
  }
};

const searchByAllSelectedAppareils = () => {
  // eslint-disable-next-line no-restricted-syntax
  for (const appareil of selectedAppareil) {
    filterRecipes = searchByAppareil(appareil);
  }
};

const searchByAllSelectedUstensiles = () => {
  // eslint-disable-next-line no-restricted-syntax
  for (const ustensile of selectedUstensile) {
    filterRecipes = searchByUstensile(ustensile);
  }
};

(function initSearch() {
  init(searchByTag, removeTag);
}());
