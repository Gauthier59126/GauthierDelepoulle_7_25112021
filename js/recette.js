const recipeConteneur = document.querySelector('.conteneur-recettes');

const recipeName = () =>{
    const divNom = document.createElement('div');
    divNom.className = '.nom';

    const nom = document.createElement('h2');

    divNom.appendChild(nom);

    return divNom;
}

const recipeTime = () => {
    const divTemps = document.createElement('div');
    divTemps.className = '.temps';

    const icone = document.createElement('i');
    icone.className = '.far-fa-clock',

    divTemps.appendChild(icone);

    return divTemps;
}

const recipeIngredients = () => {
    const divIngredients = document.createElement('div');
    divIngredients.className = '.ingredients';

    const ingredients = document.createElement('h3');
    
    divIngredients.appendChild(ingredients);

    return divIngredients;
}

const recipeMaking = () => {
    const divPreparation = document.createElement('div');
    divPreparation.className = '.preparation';

    const textPreparation = document.createElement('p');

    divPreparation.appendChild(textPreparation);

    return divPreparation;
}

const recipeDescription = () => {
    const divDescription = document.createElement('div');
    divDescription.className = '.description-recette';

    divDescription.append(divNom, divTemps, divIngredients, divPreparation);

    return divDescription;
}

const recipeImage = () => {
    const divImage = document.createElement('div');
    divImage.className = '.div-img';
    divImage.src = "";

    return divImage;
}

const recipe = () => {
    const divRecette = document.createElement('div');
    divRecette.className = '.recette';

    divRecette.append(divImage, divDescription);

    recipeConteneur.append(divRecette);
}

