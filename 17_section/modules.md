Modules

272. 
-u fajl 272script.js importujemo 272shoppingCart.js fajl
-u fajlu 272shoppingCart kreiramo shippingCost i cart varijable
-u fajlu 272shoppingCart kreiramo addToCart funkciju
-unutar addToCart funkcije cart varijabli dodajemo push metodu
-u fajlu 272shoppingCart kreiramo totalPrice i totalQuantity varijable
-eksportujemo totalPrice i totalQuantity varijable
-u fajlu 272script dodajemo import * as ShoppingCart from './272shoppingCart.js';
-u fajlu 272shoppingCart kreiramo export default funkciju bez imena 
-u fajlu 272script pozivamo funkciju add sa dva argumenta, imenom hrane i kolicina


273. 
-kreiramo varijablu res u koje ce biti pohranjena vrijednost metodu await fetch
-kreiramo funkciju getLastPost
-unutar getLastPost funkcije dodajemo res varijablu
-ispred res varijable dodajemo await keyword
-res varijabli dodajemo json() metodu
-dobivenu vrijednost pohranimo u data varijablu
-dodajemo return keyword
-unutar return dodajemo .at(-1) metodu da dobijemo zadnji naslov i tekst iz objekta
-pozivamo funkciju getLastPost bez argumenta i dobiveni rezultat pohranjujemo u lastPost varijabli
-ponovo pozivamo funkciju getLastPost sa await keyword, bez argumenta i dobiveni rezultat pohranjujemo
u lastPost2 varijabli
