Bankist website

184. 
-funkciji openModal() dodajemo e parametar i e.preventDefault()
-btnsOpenModal je node list
-varijabli btnsOpenModal dodajemo javascript metodu forEach
-kao parametar uzimamo btn
-svakom btn parametru dodajemo addEventListener


185. 
-DOM je interfejs izmedu javascripta i pretrazivaca


186. 
-selektovanje elemenata
-kreiranje i insertovanje elemenata
-kreiranje DOM elementa div i pohranjivanje istog u varijablu message
-dodavanje klase varijabli message
-varijabli message dodajemo innerHTML metodu
-brisanje elemenata


187. 
-varijabli message dodajemo style javascript metodu
-dodavanje atributa varijabli logo
-getAttribute i setAttribute metode


188. 
-implementiranje glatkog skrolanja
-kreiranje varijabli btnScrollTo i section1 
-varijabli btnScrollTo dodajemo addEventListener
-unutar callback funkcije kreiramo varijablu s1coords
-getBoundingClientRect() metoda
-scrollIntoView() metoda


189. 
-kreiramo varijablu h1
-mouseenter dogadaj
-kreiranje alertH1 funkcije
-dodavanje setTimeout funkcije koja ce nakon odredenog broja sekundi da ukloni EventListener 


190. 
-Bubbling and Capturing


191. 
-event propagation 
-kreiramo funkciju randomInt()
-kreiramo funkciju randomColor()
-selektujemo HTML elemente sa klasama .nav__link, .nav__links i .nav 
-tim elemetima dodajemo addEventListener


192. 
-event delegation
-selektujemo HTML element sa klasom .nav__links
-selektovanom HTML elementu dodajemo addEventListener
-unutar callback funkcije dodamo if uslov


193. 
-kreiramo varijablu h1
-h1 varijabli dodjeljujemo firstElementChild i lastElementChild metode
-h1 varijabli dodajemo closest() javascript metodu
-kreiramo niz h1.parentElement.children
-h1.parentElement.children nizu dodajemo forEach() metodu


194. 
-kreiramo varijablu tabs
-kreiramo varijablu tabsContainer
-kreiramo varijablu tabsContent
-varijabli tabsContainer dodajemo addEventListener
-unutar callback funkcije kreiramo varijablu clicked
-varijabli clicked dodajemo e.target.closest() metodu
-tabs varijabli dodajemo forEach() metodu pomocu koje uklanjamo klasu elementa
-varijabli clicked dodajemo classList metodu pomocu koje HTML elementu dodajemo klasu
-pomocu querySelector metode selektujemo kliknuti HTML i tom elementu zatim dodajemo classList metodu
-tabsContent varijabli dodajemo forEach() metodu pomocu kojeg uklanjamo klasu elementa


195. 
-kreiramo nav varijablu
-nav varijabli dodajemo addEventListener sa dogadajem mouseover
-nav varijabli dodajemo addEventListener sa dogadajem mouseout
-kreiramo funkciju handleOver()
-unutar handleOver funkcije dodajemo if uslov
-unutar if uslova kreiramo link, siblings i logo varijable
-siblings varijabli dodajemo metodu forEach()


196. 
-kreiramo initialCoords varijablu
-varijabli initialCoords dodjeljujemo varijablu section1 sa metodom getBoundingClientRect()
-dodajemo uslov za pojavljivanje sticky navigacije
