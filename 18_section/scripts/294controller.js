// 294. Event Handlers in MVC: Publisher-Subscriber Pattern

import * as model from './294model.js';
import recipeView from './294recipeView.js';

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
        alert(error);
    };
};

const init = function() {
    recipeView.addHandlerRender(controlRecipes);
};
init();
