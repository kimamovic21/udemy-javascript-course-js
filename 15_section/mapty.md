Mapty OOP App


232. 
-pohranjujemo HTML elemente unutar varijable da bi vrsili manipulaciju sa njima
-dodajemo uslov if(navigator.geolocation) i unutar njega kod za nasu trenutnu lokaciju
-samo prvoj funkciji dodajemo parametar position

233. 
-otvaramo stranicu https://leafletjs.com/
-kopiramo link i script elemente unutar head elementa
-kopiramo kod let map unutar uslova if(navigator.geolocation)
-kreiramo coords niz sa dva elementa


234. 
-dodajemo map.on sa callback funkcijom koja ima parametar mapEvent
-L.marker() prebacujemo unutar map.on() da imamo mogucnost da mi postavljamo marker na mapu, na mjesto na koje zelimo
-pravimo izmjene unutar L.marker -> L.marker([lat, lng])
-uredujemo bindPopup funkciju
-dodajemo .setPopupContent


235. 
-unutar map.on() dodajemo varijabli form dodajemo klasu classList pomocu koje uklanjamo klasu hidden
-varijabli inputDistance dodajemo .focus() metodu
-form varijabli dodajemo addEventListener
-deklarisemo varijablu map na pocetku
-deklarisemo varijablu mapEvent
-unutar map.on() funkcije dodajemo mapEvent = mapE;
-dodajemo kod za clear input values
-varijabli inputType dodajemo addEventListener
-varijabli inputElevation dodajemo closest, classList i toggle metode
-varijalbi inputCadence dodajemo iste metode


237. 
-kreiramo klasu App i unutar nje funkcije koje ce nam trebati
-kreiramo varijablu const app
-unutar constructor funkcije dodajemo this._getPosition()
-dodajemo varijable #map i #mapEvent App klasi
-dodajemo metode .bind(this)
-uredujemo metode unutar klase App


238. 
-kreiramo novu klasu Workout


239. 
-uredujemo _newWorkout metodu 


