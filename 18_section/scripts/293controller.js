// 293. Helpers and Configuration Files

import * as model from './293model.js';
import recipeView from './293recipeView.js';

import icons from 'url:../src/img/icons.svg';  // Parcel 2
import 'core-js/stable';
import 'regenerator-runtime/runtime';
console.log(icons);  

const recipeContainer = document.querySelector('.recipe');


// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////


const controlRecipes = async function() {
    try {
       const id = window.location.hash.slice(1);
       console.log(id);

       if(!id) return;
       recipeView.renderSpinner();

       // 1) Loading recipe
       await model.loadRecipe(id);

        // 2) Rendering recipe
        recipeView.render(model.state.recipe);

    } catch (error) {
        alert(error);
    };
};
controlRecipes();


['hashchange', 'load'].forEach(e => window.addEventListener(e, controlRecipes));

