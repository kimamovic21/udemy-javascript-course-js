// 288. Loading a Recipe from API

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

const showRecipe = async function() {
    try {
       // 1) Loading recipe
        // const res =  await fetch(`https://forkify-api.herokuapp.com/api/get?rId=12345`);  // wrong API
       const res =  await fetch(`https://forkify-api.herokuapp.com/api/get?rId=47746`);  // correct API
       const data = await res.json();
       console.log(res); // Response
       console.log(data);  // {recipe: {...}}

        if(!res.ok) throw new Error(`${data.message} (${res.status})`);

        // let recipe = data.recipe;
        let {recipe} = data;
        // console.log(recipe);

        recipe = {
            id: recipe.recipe_id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceURL: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients,
        };
        console.log(recipe);  // {...}

    } catch (error) {
        alert(error);
    };
};
showRecipe();
