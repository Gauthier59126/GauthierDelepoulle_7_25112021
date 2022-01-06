import normalize from './normalize';

let searchByTag = null;
let removeTag = null;
let ingredientsNames = [];
let appareilsNames = [];
let ustensilesNames = [];
let selectedIngredient = [];
let selectedAppareil = [];
let selectedUstensile = [];

// Affichage du tag ingrédient sélectionné au dessus du dropdown
const addTagIngredient = (ingredient) => {
  console.log(ingredient);
  selectedIngredient.push(ingredient);

  const divTag = document.createElement('div');
  divTag.className = 'div-tag t-ingredients';

  const titreTag = document.createElement('h2');
  titreTag.innerText = ingredient;

  const divClose = document.createElement('div');
  divClose.className = 'close-btn';

  const closeBtn = document.createElement('i');
  closeBtn.className = 'far fa-times-circle';

  divClose.addEventListener('click', () => {
    if (removeTag) {
      removeTag(ingredient, 'ingredient');
      selectedIngredient = selectedIngredient.filter((element) => element !== ingredient);
    }
    divTag.style.display = 'none';
  });
  divClose.appendChild(closeBtn);
  divTag.append(titreTag, divClose);

  const blockTags = document.querySelector('.block-tags');
  blockTags.append(divTag);

  if (searchByTag) {
    searchByTag(ingredient, 'ingredient');
  }
};

// affichage des ingrédients dans le dropdown
const displayIngredients = (ingredients) => {
  const divDropIngredients = document.querySelector('.dropdown-child-ingredients');
  divDropIngredients.innerText = '';

  ingredients.forEach((ingredient) => {
    const a = document.createElement('a');
    a.innerText = ingredient;
    a.className = 'dropdown-elements';
    a.addEventListener('click', (e) => {
      const ingredientValue = e.target.innerText;
      if (!selectedIngredient.includes(ingredientValue)) {
        addTagIngredient(ingredientValue);
      }
    });

    divDropIngredients.appendChild(a);
  });
};

// Fonction de recherche du dropdown ingreidents
const searchIngredient = (input) => {
  const normalizeInput = normalize(input);
  const result = ingredientsNames.filter((ingredient) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    normalize(ingredient).includes(normalizeInput));
  displayIngredients(result);
};

// Affichage du tag appareil sélectionné au dessus du dropdown
const addTagAppareil = (appareil) => {
  selectedAppareil.push(appareil);

  const divTag = document.createElement('div');
  divTag.className = 'div-tag t-appareil';

  const titreTag = document.createElement('h2');
  titreTag.innerText = appareil;

  const divClose = document.createElement('div');
  divClose.className = 'close-btn';

  const closeBtn = document.createElement('i');
  closeBtn.className = 'far fa-times-circle';

  divClose.addEventListener('click', () => {
    divTag.style.display = 'none';
    if (removeTag) {
      removeTag(appareil, 'appareil');
      selectedAppareil = selectedAppareil.filter((element) => element !== appareil);
    }
  });
  divClose.appendChild(closeBtn);
  divTag.append(titreTag, divClose);

  const blockTags = document.querySelector('.block-tags');
  blockTags.append(divTag);

  if (searchByTag) {
    searchByTag(appareil, 'appareil');
  }
};

// affichage des appareils dans le dropdown
const displayAppareil = (appareils) => {
  const divDropAppareils = document.querySelector('.dropdown-child-appareil');
  divDropAppareils.innerText = '';

  appareils.forEach((appareil) => {
    const a = document.createElement('a');
    a.innerText = appareil;
    a.className = 'dropdown-elements';
    a.addEventListener('click', (e) => {
      const appareilValue = e.target.innerText;
      if (!selectedAppareil.includes(appareilValue)) {
        addTagAppareil(appareilValue);
      }
    });

    divDropAppareils.appendChild(a);
  });
};

// Fonction de recherche du dropdown appareil
const searchAppareil = (input) => {
  console.log(appareilsNames);
  const normalizeInput = normalize(input);
  const result = appareilsNames.filter((appareil) => normalize(appareil).includes(normalizeInput));
  displayAppareil(result);
};

// Affichage du tag ustensil sélectionné au dessus du dropdown
const addTagUstensile = (ustensile) => {
  selectedUstensile.push(ustensile);

  const divTag = document.createElement('div');
  divTag.className = 'div-tag t-ustensiles';

  const titreTag = document.createElement('h2');
  titreTag.innerText = ustensile;

  const divClose = document.createElement('div');
  divClose.className = 'close-btn';

  const closeBtn = document.createElement('i');
  closeBtn.className = 'far fa-times-circle';

  divClose.addEventListener('click', () => {
    divTag.style.display = 'none';
    if (removeTag) {
      removeTag(ustensile, 'ustensile');
      selectedUstensile = selectedUstensile.filter((element) => element !== ustensile);
    }
  });
  divClose.appendChild(closeBtn);
  divTag.append(titreTag, divClose);

  const blockTags = document.querySelector('.block-tags');
  blockTags.append(divTag);

  if (searchByTag) {
    searchByTag(ustensile, 'ustensile');
  }
};

// affichage des ustensiles dans le dropdown
const displayUstensiles = (ustensiles) => {
  const divDropUstensiles = document.querySelector('.dropdown-child-ustensiles');
  divDropUstensiles.innerText = '';

  ustensiles.forEach((ustensile) => {
    const a = document.createElement('a');
    a.innerText = ustensile;
    a.className = 'dropdown-elements';
    a.addEventListener('click', (e) => {
      const ustensileValue = e.target.innerText;
      if (!selectedUstensile.includes(ustensileValue)) {
        addTagUstensile(ustensileValue);
      }
    });

    divDropUstensiles.appendChild(a);
  });
};

// Fonction de recherche du dropdown ustensiles
const searchUstensiles = (input) => {
  const normalizeInput = normalize(input);
  const result = ustensilesNames.filter((ustensile) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    normalize(ustensile).includes(normalizeInput));
  displayUstensiles(result);
};

const init = () => {
  const ingredientsInput = document.getElementById('ingredients-input');
  ingredientsInput.addEventListener('input', (e) => {
    const input = e.target.value;
    searchIngredient(input);
  });

  const appareilsInput = document.getElementById('appareils-input');
  if (appareilsInput) {
    appareilsInput.addEventListener('input', (e) => {
      const input = e.target.value;
      searchAppareil(input);
    });
  }

  const ustensilesInput = document.getElementById('ustensiles-input');
  if (ustensilesInput) {
    ustensilesInput.addEventListener('input', (e) => {
      const input = e.target.value;
      searchUstensiles(input);
    });
  }
};

export default (recipes, search, remove) => {
  searchByTag = search;
  removeTag = remove;

  const ingredients = recipes.map((recipe) => recipe.ingredients).flat();
  const names = ingredients.map((ingredient) => ingredient.ingredient);
  ingredientsNames = [...new Set(names)];
  console.log(ingredients);

  const appareils = recipes.map((recipe) => recipe.appliance);
  appareilsNames = [...new Set(appareils)];
  console.log(appareils);

  const ustensiles = recipes.map((recipe) => recipe.ustensils).flat();
  ustensilesNames = [...new Set(ustensiles)];
  console.log(ustensiles);

  displayIngredients(ingredientsNames);
  displayAppareil(new Set(appareils));
  displayUstensiles(new Set(ustensiles));
};

(function initTag() {
  init();
}());
