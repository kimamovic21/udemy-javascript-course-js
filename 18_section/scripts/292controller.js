// 292. Refactoring for MVC

import * as model from './292model.js';
import recipeView from './292recipeView.js';

import icons from 'url:../src/img/icons.svg';  // Parcel 2
import 'core-js/stable';
import 'regenerator-runtime/runtime';
console.log(icons);  

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

// fetch(`https://forkify-api.herokuapp.com/api/get?rId=47746`)


const controlRecipes = async function() {
    try {
       const id = window.location.hash.slice(1);
       console.log(id);

       if(!id) return;
        // renderSpinner(recipeContainer);
       recipeView.renderSpinner();

       // 1) Loading recipe
       await model.loadRecipe(id);
    //    const recipe = model.state.recipe;
    //    const {recipe} = model.state;

        // 2) Rendering recipe
        recipeView.render(model.state.recipe);

    } catch (error) {
        alert(error);
    };
};
controlRecipes();


// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);
['hashchange', 'load'].forEach(e => window.addEventListener(e, controlRecipes));

