// 295. Implementing Error and Success Messages

import * as model from './295model.js';
import recipeView from './295recipeView.js';

import icons from 'url:../src/img/icons.svg';  // Parcel 2
import 'core-js/stable';
import 'regenerator-runtime/runtime';

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
        // console.log(error);
        // recipeView.renderError(`${error} ⛔⛔⛔⛔`);
        recipeView.renderError();
    };
};

const init = function() {
    recipeView.addHandlerRender(controlRecipes);
};
init();
