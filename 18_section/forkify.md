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


292. 
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


293. 
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


294. 
1. u 294recipeView fajlu dodajemo metodu addHandlerRender()
2. u 294controller fajlu kreiramo init funkciju


295. 
1. u 295recipeView fajlu kreiramo renderError metodu
2. unutar renderError metode kreiramo markup varijablu
3. u 295recipeView fajlu kreiramo privatnu varijablu #errorMessage
4. u 295recipeView fajlu kreiramo renderMessage metodu
5. u 295recipeView fajlu kreiramo #message privatnu varijablu

