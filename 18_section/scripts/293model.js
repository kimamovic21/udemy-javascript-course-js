// 293. Helpers and Configuration Files

import { async } from "regenerator-runtime";
import { API_URL } from "./293config";
import { getJSON } from "./293helpers";

export const state = {
    recipe: {},
};

export const loadRecipe = async function(id) {
    try {
        // const res =  await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);  

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
        // alert(err);
        // Temporary error handling
        console.error(`${err} ⛔⛔⛔⛔`);
    };
};
