Forkify app

288. Loading a Recipe from API
1. npm init
2. npm i parcel@next -D
3. npm run start
4. otvaramo https://forkify-api.herokuapp.com/ web stranicu
5. unutar fajla 288script.js dodajemo fetch metodu
6. kreiramo showRecipe async funkciju
7. unutar showRecipe funkcije dodajemo try - catch blok koda
8. unutar try bloka kreiramo varijablu res unutar koje je pohranjen rezultat dobijen fetch metodom
9. kreiramo varijablu data cija je vrijednost jednaka await i res.json() metodama
10. ispisujemo u konzoli rezultat varijabli res i data
11. pozivamo funkciju showRecipe() bez argumenta
12. unutar try bloka koda, dodajemo if uslov 
13. unutar tog if uslova dodajemo sta se treba desiti ako je res netacna vrijednost
14. if uslovu dodajemo Error objekat
15. unutar try bloka koda kreiramo recipe varijablu 
16. koristimo array destructuring da izvucemo podatke iz data varijable
17. kreiramo recipe objekt sa key: value vrijednostima


289. Rendering the Recipe
1. kreiramo markup varijablu unutar koje se nalaze HTML elemente sa klasama
2. u markup varijabli, img elementu mijanjemo src i alt atribute
3. u markup varijabli, dodajemo template literals metode odredenim HTML elementima
4. recipeContainer varijabli dodajemo metodu innerHTML koja je jednaka praznim navodnicima
5. recipeContainer varijabli dodajemo insertAdjacentHTML metodu sa dva argumenta, afterbegin i markup varijabla
6. unutar ul elementa dodajemo js map metodu koja ce izlistati sastojke hrane
7. nakon map metode, dodajemo join metodu
8. importujemo icons na pocetku fajla
9. dodajemo template literals unutar svg HTML elemenata
10. kreiramo renderSpinner funkciju sa parentEl parametrom
11. unutar renderSpinner funkcije kreiramo markup varijablu
12. parentEl varijabli dodajemo insertAdjacentHTML metodu 
13. unutar showRecipe funkcije pozivamo renderSpinner funkciju sa argumentom recipeContainer
14. instaliramo npm i core-js paket
15. instaliramo npm i regenerator-runtime paket


290. Listening For load and hashchange Events
1. window objektu dodajemo addEventListener
2. unutar try bloka koda kreiramo varijablu id
3. u res varijabli dodajemo template literals sa id-em koji smo prethodno kreirali
4. kreiramo a elemente sa href atributima unutar div elementa sa klasom search-results
5. dodajemo if uslov prije loading recipe
6. ispod showRecipe() funkcije dodajemo niz sa forEach() metodom


291. The MVC Architecture


292. Refactoring for MVC
1. kreiramo novi fajl model.js
2. kreiramo novi fajl recipeView.js
3. u model.js fajlu kreiramo state objekt
4. u model.js fajlu kreiramo loadRecipe funkciju
5. kopiramo kod izmedu 1) Loading recipe i 2)Rendering recipe 
6. kopirani kod brisemo u 292controller fajlu i ubacujemo ga u model.js fajlu, loadRecipe funkciju
7. loadRecipe funkciji dodajemo parametar id
8. dodajemo recipe objektu dodajemo state.recipe
9. u 292controller.js fajlu importujemo * na poceku fajla
10. unutar 1) Loading recipe dodajemo await model.loadRecipe(id);
11. u 292model.js fajlu dodajemo try - catch blokove koda
12. u 292controller.js fajlu, ispod await model.loadRecipe(id); dodajemo  const {recipe} = model.state;
13. unutar 292recipeView.js fajla kreiramo klasu RecipeView
14. unutar RecipeView klase kreiramo privatnu vrijednost #parentElement
15. eksportujemo RecipeView klasu
16. u 292controller.js fajlu importujemo recipeView na pocetku fajla
17. u 292controller.js fajlu, u dijelu koda za 2) Rendering recipe dodajemo recipeView.render(model.state.recipe);
18. u 292recipeView.js fajlu dodajemo privatnu vrijednost #data
19. u 292recipeView.js fajlu dodajemo render metodu sa data parametrom
19. markup varijablu brisemo iz 292controller.js fajla i dodajemo je u 292recipeView fajl
20. u 292recipeView.js fajlu dodajemo privatnu metodu #generateMarkup
21. unutar privatne metode #generateMarkup dodajemo HTML kod koji smo koristili unutar markup varijable
22. umjesto recipe unutar template literals, pisemo this.#data
23. unutar render(data) funkcije doajemo varijablu markup i recipeContainer sa metodama innerHTML i insertAdjacentHTML
24. u 292recipeView.js fajlu dodajemo privatnu #clear metodu 
25. u 292controller.js fajlu mijenjamo ime funkcije showRecipes u controlRecipes
26. brisemo renderSpinner funkciju iz 292controller.js fajla
27. u 292recipeView.js fajlu dodajemo #renderSpinner javnu metodu
28. instaliramo u terminalu npm i fractional paket
29. u 292recipeView.js fajlu importujemo fractional paket na pocetku fajla
30. unutar 292recipeView.js fajla kreiramo privatnu metodu generateMarkupIngredient sa parametrom ing 
31. pravimo izmjene u map metodi gdje kao parametar uzimamo generateMarkupIngredient privatnu metodu


293. Helpers and Configuration Files
1. kreiramo 293config.js fajl
2. u 293config.js fajlu kreiramo API_URL varijablu
3. u 293model.js fajlu importujemo API_URL varijablu
4. u const red varijablu pravimo izmjenu u fetch metodi
5. kreiramo 293helpers.js fajl
6. u 293helpers.js fajlu kreiramo async getJSON funkciju
7. u 293model.js fajl importujemo getJSON funkciju
8. u 293helpers fajlu kreiramo timeout funkciju
9. u 293helpers fajlu kreiramo fetchPromise varijablu
10. u 293config fajlu kreiramo TIMEOUT_SEC varijablu
11. u 293helpers fajl importujemo TIMEOUT_SEC varijablu


294. Event Handlers in MVC: Publisher-Subscriber Pattern
1. u 294recipeView fajlu dodajemo metodu addHandlerRender()
2. u 294controller fajlu kreiramo init funkciju


295. Implementing Error and Success Messages
1. u 295recipeView fajlu kreiramo renderError metodu
2. unutar renderError metode kreiramo markup varijablu
3. u 295recipeView fajlu kreiramo privatnu varijablu #errorMessage
4. u 295recipeView fajlu kreiramo renderMessage metodu
5. u 295recipeView fajlu kreiramo #message privatnu varijablu


296. Implementing Search Results - Part 1
1. u 296model.js fajlu kreiramo async funkciju loadSearchResults
2. unutar loadSearchResults funkcije kreiramo try - catch blokove koda
3. u varijabli state dodajemo search objekt
4. u 296controller.js fajlu kreiramo controlSearchResults funkciju
5. unutar controlSearchResults funkcije dodajemo try - catch blokove koda
6. kreiramo novi searchView.js fajl
7. u 296searchView.js fajlu kreiramo SearchView klasu
8. unutar klase kreiramo privatnu varijablu #parentElement
9. kreiramo getQuery metodu
10. u 296controller.js fajlu importujemo searchView
11. u 296searchView.js fajlu dodajemo addHandlerSearch metodu
12. dodajemo clearInput metodu


297. Implementing Search Results - Part 2
1. kreiramo resultsView.js fajl
2. unutar resultsView.js fajla kreiramo ResultsView klasu
3. kreiramo View.js fajl
4. u View.js fajlu kreiramo klasu View
5. u 297recipeView.js fajlu umjesto # za varijable i metode pisemo _
6. u 297searchView.js fajlu umjesto # za varijable i metode pisemo _
7. u resultsView.js fajlu kreiramo _generateMarkup metodu

 
298. Implementing Pagination - Part 1
1. u model.js fajlu kreiramo getSearchResultsPage funkciju sa prametrom page
2. u return izjavi dodajemo state.search.results.slice metodu
3. kreiramo start varijablu
4. kreiramo varijablu end 
5. varijable start i end proslijedujemo u slice metodu
6. u const state objeku dodajemo resultsPerPage
7. u try bloku koda dodajemo resultsView.render(model.getSearchResultsPage())
8. dodajemo state.search.page = page
9. u const state objekt dodajemo page


299. Implementing Pagination - Part 2
1. kreiramo pagination View.js fajl
2. kreiramo _generateMarkup() metodu
3. u controller.js dodajemo 4) kod za inicijalnu vrijednost paginacije
4. pod 4) dodajemo paginationView.render(model.state.search)
5. u paginationView.js fajlu kreiramo numPages varijablu
6. dodajemo if uslov ako je trenutna stranica broj 1
7. dodajemo if uslov ako smo na zadnjoj stranici
8. dodajemo if uslov sako na nekoj stranici koja nije prva i zadnja
9. u dijelu koda za stranicu 1 dodajemo kreiramo button element
10. u dijelu koda za zadnju stranicu kreiramo button element
11. u dijelu koda za ostale stranice kreiramo dva button elementa
12. u zadnjoj return izjavi dodajemo prazan string ako vise nema stranica za prikazati
13. kreiramo addHandlerClick funkciju sa parametrom handler
14. this._parentElement dodajemo addEventListener
15. kreiramo btn varijablu
16. u controller.js fajlu kreiramo controlPagination funkciju
17. button elementima dodajemo atribut data-goto="..."
18. u paginationView.js fajlu, unutar addHandlerClick funkcije, kreiramo varijablu goToPage
19. dodajemo if uslov ako ne postoji dugme
20. dodajemo handler(goToPage)


300. Project Planning II


301. Updating Recipe Servings
1. u controller.js fajlu kreiramo controlServings funkciju
2. u controlServings funkciji dodajemo model.updateServings()
3. u modal.js fajlu kreiramo updateServings funkciju pa parametrom newServings
4. u updateServings funkciju dodajemo state.recipe.ingredients.forEach() 
5. u forEach metodi dodajemo ing.quantity
6. u controller.js fajlu, unutar controlServings funkcije, dodajemo recipeView.redner
7. u init funkciji dodajemo controlServings
8. u recipeView kreiramo addHandlerUpdateServings funkciju sa parametrom handler
9. u addHandlerUpdateServings funkciju dodajemo this._parentElement sa addEventListener
10. unutar callback funkcije kreiramo btn varijablu
11. dodajemo if uslov ako nema dugmeta
12. u controller.js fajlu, unutar init funkcije, dodajemo recipeView.addHandlerUpdateServings 
13. u recipeView.js fajlu, unutar addHandlerUpdateServings funkciji, pozivamo handler funkciju
14. u controller.js fajlu, controlServings funkciji dodajemo newServings parametar
15. u model.updateServings dodajemo argument newServings
16. u recipeView.js fajlu, unutar addHandlerUpdateServings funkcije kreiramo updateTo varijablu
17. dodajem uslov ako je updateTo varijabla veca od 0


302. Developing a DOM Updating Algorithm
1. u controller.js dodajemo recipeView.update() metodu
2. u View.js fajlu kreiramo update(data) funkciju
3. u update(data) funkciju dodajemo if uslov
4. kreiramo varijablu newMarkup
5. kreiramo newDOM varijablu
6. kreiramo newElements varijablu
7. newElements varijabli dodajemo .forEach() metodu
8. dodajemo if uslov
9. u resultsView.js fajlu, unutar _generateMarkupPreview funkcije, kreieramo id varijablu
10. u return izjavi, u a elementu dodajemo dinamicnu klasu
11. u controller.js fajlu, unutar controlRecipes funkcije, resultsView varijabli dodajemo update metodu


303. Implementing Bookmarks - Part 1
1. u model.js fajlu, unutar loadSearchResults funkcije, dodajemo state.search.page = 1
2. kreiramo addBookmark funkciju sa parametrom recipe
3. u state objekt kreiramo bookmarks prazan niz
4. u funkciju addBokmark dodajemo state.bookmarks.push
5. dodajemo uslov if (recipe.id === state.recipe.id)
6. u controller.js fajlu kreiramo controlAddBookmark funkciju
7. u funkciju controlAddBookmark dodajemo model.addBookmark
8. u recipeView.js funkciju kreiramo addHandlerAddBookmark funkciju sa parametrom handler 
9. dodajemo this._parentElement.addEventListener
10. unutar callback funkcije kreiramo btn varijablu
11. dodajemo uslov if(!btn)
12. pozivamo handler() funkciju
13. u controller.js fajlu, unutar init funkcije, dodajemo recipeView.addHandlerAddBookmark(controlAddBookmark)
14. u  controller.js fajlu, unutar controlAddBookmark funkcije, dodajemo recipeView.update(model.state.recipe)
15. u model.js fajlu, unutar loadRecipe funkcije, dodajemo uslov if(state.bookmarsk.some())
16. u if uslov dodajemo state.recipe.bookmarked = true
17. u else dodajemo state.recipe.bookmarket = false
18. u mode.js fajlu kreiramo deleteBookmark funkciju sa parametrom id
19. u deleteBookmark funkciju dodajemo state.bookmarks.splice(index, 1)
20. kreiramo index varijablu
21. dodajemo uslov if (id === state.recipe.id)
22. u controller.js fajlu, unutar controlAddBookmark funkcije dodajemo uslov if(!model.state.recipe.bookmarked)
23. dodajemo uslov else (model.state.recipe.bookmarked)


304. Implementing Bookmarks - Part 2
1. kreiramo bookmarksView.js fajl
2. u controller.js fajl importujemo bookmarksView fajl
3. u controlAddBookmar dodajemo bookmarksView.render()
4. u controlRecipes funkciji dodajemo bookmarksView.update(mode.state.bookmarks)
5. kreiramo previewView.js fajl
6. u bookmarksView.js fajl importujemo previewView.js fajl
7. u BookmarksView klasi kreiramo _generateMarkup() metodu
8. u View.js fajlu, render metodi dodajemo parametar render = true
9. dodajemo uslov if(!render)


305. Storing Bookmarks With localStorage
1. u model.js fajlu kreiramo funkciju persistBookmarks
2. u persistBookmarks dodajemo localStorage
3. u funkcije persistBookmarks i deleteBookmarks dodajemo persistBookmarks funkciju
4. kreiramo funkciju init 
5. u funkciju init dodajamo localStorage
6. kreiramo varijablu storage
7. dodajemo if uslov ako storage postoji
8. u bookmarksView.js fajlu kreiramo funkciju addHandlerRender sa parametrom handler
9. u funkciju addHandlerRender dodajemo window objekt
10. window objektu dodajemo addEventListener
11. u controller.js fajlu kreiramo controlBookmakrs funkciju
12. u controlBookmakrs funkciju dodajemo bookmarksView.render(...)
13. u funkciju init dodajemo bookmarksView.addHandlerRender(...)
14. 
