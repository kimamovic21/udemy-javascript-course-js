Async Javascript

248. 
-kreiramo btn varijablu
-kreiramo countriesContainer varijablu
-kreiramo varijablu request
-request varijabli dodajemo open metodu sa dva parametra
-request varijabli dodajemo send metodu
-request varijabil dodajemo addEventListener sa dva parametra, load dogadajem i callback funkciju
-unutar callback funkcije kreiramo [data] varijablu
-unutar callback funkcije kreiramo html varijablu
-podatke koje smo dobili pohranjujemo unutar HTML elemenata
-countriesContainer varijabli dodajemo insertAdjacentHTML metodu
-countriesContainer varijabli dodajemo opacity 1
-kreiramo getCountryData funkciju
-kod koji smo pisali ubacimo u getCountryData funkciju
-pozivamo getCountryData funkciju sa parametrom imena drzave


250. 
-kreiramo funkciju getCountryDataAndNeighbor
-kreiramo funkciju renderCountry sa dva parametra
-pozivamo funkciju renderCountry sa dva parametra, data2 i klasom neighbour
-pozivamo funkciju getCountryDataAndNeighbor sa jednim parametrom


251. 
-kreiramo funkciju getCountryData sa jednim parametrom
-unutar getCountryData funkcije dodajemo fetch metodu
-nakon fetch metode, dodajemo then metode


253. 
-unutar funkcije getCountryData, unutar then metode, dodajemo funkciju renderCountry sa parametrom
-kreiramo varijablu neighbour


254. 
-btn varijabli dodajemo addEventListener sa dva parametra
-unutar getCountryData funkcije dodajemo catch metodu
-kreiramo funkciju renderError sa msg parametrom
-unutar renderError funkcije varijabli countriesContainer dodajemo metodu insertAdjacentHTML
-countriesContainer varijabli dodajemo opacity 1
-nakon catch metode dodajemo finally metodu


255. 
-kreiramo funkciju getJSON sa dva parametra
-unutar getJSON funkcije dodajemo fetch, then metode
-nakon toga dadajemo if uslov i throw new Error
-unutar getCountryData dodajemo getJSON funkciju


256. 
-kreiramo funkciju whereAmI


258. 
-Promise.resolve metoda


259. 
-kreiramo varijablu lotteryPromise
-kreiramo wait funkciju


260. 
-kreiramo funkciju getPosition

