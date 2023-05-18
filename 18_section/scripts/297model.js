// 297. Implementing Search Results - Part 2

import { async } from "regenerator-runtime";
import { API_URL } from "./296config";
import { getJSON } from "./296helpers";

export const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
    },
};

export const loadRecipe = async function(id) {
    try {
        const data = await getJSON(`${API_URL}/get?rId=${id}`);

        const {recipe} = data;
        state.recipe = {
            id: recipe.recipe_id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceURL: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients,
        };
        console.log(state.recipe);  
    } 
    catch (err) {
        // Temporary error handling
        console.error(`${err} ⛔⛔⛔⛔`);
        throw err;
    };
};


export const loadSearchResults = async function(query) {
    try {
        state.search.query = query;
        const data = await getJSON(`${API_URL}search?q=${query}`)
        console.log(data);

        state.search.results = data.recipes.map((recipe) => {
            return {
                id: recipe.id,
                title: recipe.title,
                publisher: recipe.publisher,
                image: recipe.image_url,
            };
        });
    }
    catch(err) {
        console.error(`${err} ⛔⛔⛔⛔`);
        throw err;
    };
};
