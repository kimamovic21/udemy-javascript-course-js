// 297. Implementing Search Results - Part 2

import * as model from './297model.js';
import recipeView from './297recipeView.js';
import searchView from './297searchView.js';
import resultsView from './297resultsView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

if (module.hot) {
    module.hot.accept();
};

const recipeContainer = document.querySelector('.recipe');


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


const controlSearchResults = async function() {
    try {
        resultsView.renderSpinner();

        // 1) Get search query
        const query = searchView.getQuery();
        if(!query) return;
        

        // 2) Load search results
        // await model.loadSearchResults('pizza');
        await model.loadSearchResults(query);

        // 3) Render results
        // console.log(model.state.search.results);
        resultsView.render(model.state.search.results);
    }
    catch(err) {
        console.log(err);
    };
};
// controlSearchResults();


const init = function() {
    recipeView.addHandlerRender(controlRecipes);
    searchView.addHandlerSearch(controlSearchResults);
};
init();
