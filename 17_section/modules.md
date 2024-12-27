Modules

01. 
-u fajl script.js importujemo shoppingCart.js fajl
-u fajlu shoppingCart kreiramo shippingCost i cart varijable
-u fajlu shoppingCart kreiramo addToCart funkciju
-unutar addToCart funkcije cart varijabli dodajemo push metodu
-u fajlu shoppingCart kreiramo totalPrice i totalQuantity varijable
-eksportujemo totalPrice i totalQuantity varijable
-u fajlu script dodajemo import * as ShoppingCart from './shoppingCart.js';
-u fajlu shoppingCart kreiramo export default funkciju bez imena 
-u fajlu script pozivamo funkciju add sa dva argumenta, imenom hrane i kolicina


02. 
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


03. 
-kreiramo IIFE funkciju
-kreiramo varijable unutar IIFE funkcije
-kreiramo addToCart funkciju
-kreiramo orderStock funkciju
-dodajemo return blok koda na dnu u kojem se nalaze funkcije i varijable
-pozivamo addTocart funkciju sa dva argumenta
-pozivamo orderStock funkciju sa dva argumenta


04. 
-komande u terminalu


05. 
-NPM komande


06. 
-uslov if
-izmjene u "scripts" unutar package.json fajla


07. 
-kreiramo klasu Person


08. 
-pravimo izmjene u clean.js fajlu
-funkciji add mijenjamo ime u addExpense
-funkciji expense mijenjamo ime u checkExpense
-varijabli limits mijenjamo ime u spendingLimits
-funkcija addExpense - ako nema korisnika podesiti da je korisnik jonas
-funkcija addExpense - mijenjamo parametar user u user = 'jonas'
-dodajemo uslov unutar addExpense funkcije
-funkciji expense mijenjamo ime u checkExpense
-kreiramo funkciju getLimit
-funkciji bigExpenses mijenjamo ime u logBigExpenses


09. 
-Metodu Object.freeze dodajemo varijablama spendingLimits i budget
-kreiramo cleanUser varijablu
-kreiramo bigExpenses varijablu
