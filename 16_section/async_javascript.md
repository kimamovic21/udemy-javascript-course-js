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


261. 
-kreiramo createImage funkciju sa parametrom imgPath
-unutar funkcije kreiramo Promise
-unutar Promise, kreiramo funkciju sa dva parametra resolve i reject
-kreiramo img varijablu
-img varijabli dodajemo src koji je jednak imgPath
-img varijabli dodajemo addEventListener sa load dogadajem
-unutar callback funkcije, kreiramo imgContainer varijablu
-imgContainer varijabli dodajemo append metodu
-dodajemo resolve metodu sa parametrom img
-img varijabli dodajemo jos jedan addEventListener sa error dogadajem
-unutar callback funkcije dodajemo reject metodu unutar koje se nalazi Error objekat
-pozivamo funkciju createImage sa argumentom koji je lokacija slike
-createImage funkciji dodajemo then metode
-createImage funkciji dodajemo catch metodu
-kreiramo wait funkciju
-kreiramo currentImg varijablu
-unutar prve then metode currentImg varijabli dodjeljujemo vrijednost img varijable
-pozivamo wait funkciju sa argumentom 2
-unutar druge then metode currentImg varijabli dodajemo display metodu
-pozivamo createImage funkciju sa argumentom lokacijom slike
-unutar trece then metode dodajemo currentImg varijablu koja je jednaka img varijabli
-pozivamo wait funkciju sa argumentom 2
-unutar cetvrte then metode currentImg varijabli dodajemo display metodu


262. 
-kreiramo funkciju whereAmI dodavajuci async keyword
-unutar funkcije kreiramo res varijablu
-vrijednost res varijable ce biti jednaka await fetch metodi
-res varijabli dodajemo await i json metodu()
-kreiramo data varijablu u koju pohranimo vrijednost res varijable 
-pozivamo renderCountry funkciju sa argumentom data[0]
-kreiramo funkciju getPosition
-unutar whereAmI funkcije kreiramo pos varijablu koja je jednaka vrijednosti await getPosition()
-kreiramo lat i lng varijable
-kreiramo resGeo varijablu cija je vrijednost jednaka await fetch metodi
-resGeo varijabli dodajemo json metodu
-ispred resGeo varijable dodajemo await
-dobiveni rezultat pohranimo u dataGeo varijablu


263. 
-dodajemo try - catch metode
-u try bloku dodajemo dva if uslova


264. 
-dodajemo return prije catch bloka
-nakon catch blocka dodajemo throw err


265. 
-kreiramo get3Countries async funkciju
-dodajemo try - catch blokove koda
-kreiramo getJSON funkciju
-kreiramo data varijablu unutar get3Countries funkcije
-varijabli data dodajemo await Promise.all metodu


266. 
-kreiramo async iife funkciju
-kreiramo timeout funkciju
-kreiramo Promise.race metodu
-kreiramo Promise.allSettled metodu
-kreiramo Promise.all metodu
-kreiramo Promise.any metodu
