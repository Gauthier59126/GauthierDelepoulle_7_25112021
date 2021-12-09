import { displayRecipes } from "./recette";
//import { displayTag } from "./tags";
import { recipes } from "./data";

const recipesConteneur = document.querySelector('.conteneur-recettes');
const searchBar = document.getElementById('searchBar');
let filterRecipes = recipes;

searchBar.addEventListener('input', (e) => {
    const searchString = e.target.value;
    if (searchString.length >= 3) {
        searchByInput(searchString);
    }
//        const filteredRecipes = recipes.filter( recipe => {
//        recipe.appliance.includes(searchString) || recipe.name.includes(searchString);
//    })
//    console.log(filteredRecipes);
})

const searchByInput = (input) => {
    const normalizeInput = normalize(input);
    filterRecipes = recipes.filter(recipe => searchByName(normalizeInput, recipe));
    displayRecipes(filterRecipes);
}

const searchByName = (input, recipe) => {
    return normalize(recipe.name).includes(input); 
}

const normalize = (text) => {
    return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

/*
const get = (url) => fetch(url);

const getData = async () => {
    try {
      const response = await get('data/data.json');
      const recipes = await response.json();
      displayRecipes(recipes);

    }catch (error) {
      console.log('il y a eu un problème', error);

    }
};


function search_animal() {
    let input = document.getElementById('searchBar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('animals');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}


*/
/*
getData();

const processFilter = (recipe, tag) => recipe.tags.includes(tag);

export const filterByTag = (allRecipes, tag) => allRecipes.filter((recipe) => processFilter(recipe, tag));

filterByTag;*/