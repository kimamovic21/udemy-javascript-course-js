// 290. Listening For load and hashchange Events

// import icons from '../src/img/icons.svg';  // Parcel 1
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

const renderSpinner = function(parentEl) {
    const markup = `
        <div class="spinner">
            <svg>
                <use href="${icons}#icon-loader"></use>
            </svg>
        </div>
    `;
    parentEl.innerHTML = '';
    parentEl.insertAdjacentHTML('afterbegin', markup);
};


const showRecipe = async function() {
    try {
       const id = window.location.hash.slice(1);
       console.log(id);

       if(!id) return;

        // 1) Loading recipe
       renderSpinner(recipeContainer);

       const res =  await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);  
       const data = await res.json();
    //    console.log(res); // Response
    //    console.log(data);  // {recipe: {...}}

        if(!res.ok) throw new Error(`${data.message} (${res.status})`);

        // let recipe = data.recipe;
        let {recipe} = data;

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
        // console.log(recipe.ingredients);  // (6)

        // 2)Rendering recipe
        let markup = `
            <figure class="recipe__fig">
                <img src="${recipe.image}" alt="${recipe.title}" class="recipe__img" crossorigin/>
                <h1 class="recipe__title">
                <span>${recipe.title}</span>
                </h1>
            </figure>

            <div class="recipe__details">
                <div class="recipe__info">
                <svg class="recipe__info-icon">
                    <use href="${icons}#icon-clock"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookingTime}</span>
                <span class="recipe__info-text">minutes</span>
                </div>
                <div class="recipe__info">
                <svg class="recipe__info-icon">
                    <use href="${icons}#icon-users"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
                <span class="recipe__info-text">servings</span>

                <div class="recipe__info-buttons">
                    <button class="btn--tiny btn--increase-servings">
                    <svg>
                        <use href="${icons}#icon-minus-circle"></use>
                    </svg>
                    </button>
                    <button class="btn--tiny btn--increase-servings">
                    <svg>
                        <use href="${icons}#icon-plus-circle"></use>
                    </svg>
                    </button>
                </div>
            </div>

            <div class="recipe__user-generated">
                <svg>
                    <use href="${icons}#icon-user"></use>
                </svg>
                </div>
                <button class="btn--round">
                <svg class="">
                    <use href="${icons}#icon-bookmark-fill"></use>
                </svg>
                </button>
            </div>

            <div class="recipe__ingredients">
                <h2 class="heading--2">Recipe ingredients</h2>
                <ul class="recipe__ingredient-list">
                    ${recipe.ingredients.map(ing => {
                        // console.log(ing);
                        return `
                            <li class="recipe__ingredient">
                                <svg class="recipe__icon"><use href="${icons}#icon-check"></use></svg>
                                ${ing}
                            </li>
                        `;
                        }).join('')}
                </ul>
            </div>

            <div class="recipe__directions">
                <h2 class="heading--2">How to cook it</h2>
                <p class="recipe__directions-text">
                This recipe was carefully designed and tested by
                <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
                directions at their website.
                </p>
                <a
                class="btn--small recipe__btn"
                href="${recipe.sourceURL}"
                target="_blank"
                >
                <span>Directions</span>
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                </svg>
                </a>
            </div>
        `;
        // console.log(markup);
        recipeContainer.innerHTML = '';
        recipeContainer.insertAdjacentHTML('afterbegin', markup);

    } catch (error) {
        alert(error);
    };
};
showRecipe();


// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);
['hashchange', 'load'].forEach(e => window.addEventListener(e, showRecipe));
