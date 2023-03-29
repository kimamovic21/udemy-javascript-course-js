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


197. 
-kreiramo varijablu header
-kreiramo varijablu navHeight
-kreiramo stickyNav funkciju
-dodajemo if uslov unutar stickyNav funkcije
-kreiramo varijablu headerObserver
-varijabli headerObserver dodajemo metodu .observe() sa parametrom header


198. 
-kreiramo varijablu sectionObserver
-kreiramo funkciju revealSection
-kreiramo varijablu allSections
-allSections varijabli dodajemo .forEach() metodu
-varijabli observer dodajemo .unobserve() metodu sa parametrom entry.target


199. 
-kreiramo varijablu imgTargets
-kreiramo imgObserver varijablu
-imgTargets varijabli dodajemo .forEach() metodu
-kreiramo loadImg funkciju
-varijabli observer dodajemo metodu .unobserve() metodu sa parametrom entry.target;


200. 
-kreiramo varijablu slides
-varijabli slides dodajemo metodu .forEach() sa parametrima s(slide) i i(index)
-kreiramo varijablu slider
-kreiramo varijable btnRight i btnLeft
-btnRight varijabli dodajemo addEventListener
-kreiramo varijablu curSlide sa vrijednosti 0
-kreiramo varijablu maxSlide
-kreiramo funkciju goToSlide() sa parametrom slide
-unutar goToSlide() funkcije dodajemo slides.forEach()
-kreiramo funkciju nextSlide()
-unutar nextSlide() funkcije dodajemo if - else uslov
-kreiramo funkciju prevSlide()
-unutar prevSlide() funkcije dodajemo if - else uslov


201. 
-dokumentu elementu dodajemo addEventListener sa keydown dogadajem
-kreiramo varijablu dotContainer
-kreiramo funkciju createDots()
-unutar createDots funkcije varijabli slides dodajemo .forEach() metodu
-unutar createDots funkcije, dotContainer varijabli dodajemo insertAdjacentHTML metodu
-dotContainer varijabli dodajemo addEventListener sa click dogadajem i callback funkciju sa e parametrom
-unutar callback funkcije kreiramo slide varijablu
-unutar callback funkcije pozivamo goToSlide funkciju sa slide parametrom
-kreiramo funkciju activateDot() sa parametrom slide
-selektujemo sve elemente sa klasom .dots__dot
-dodajemo .forEach() metodu
-selektujemo sve elemente sa klasom .dots__dot[data-slide="${slide}"]
-selektovanim elementima dodajemo .classList.add metode
-unutar funkcija nextSlide i prevSlide pozivamo goToSlide i activateDot funkcije sa parametrima curSlide
-kreiramo funkciju init()
-kod koji smo pisali za slider komponentu ubacimo u slider() funkciju


202. 
-dokumentu dodajemo addEventListener sa DOMContentLoaded dogadajem i callback funkcijom sa parametrom e
-window varijabli dodajemo addEventListener sa load dogadajem i callback funkcijom sa parametrom e
