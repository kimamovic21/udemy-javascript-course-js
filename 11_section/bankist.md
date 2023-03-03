Project "Bankist" App

147. 
-flowchart - logika aplikacije
-pohranjivanje HTML elemenata u JS varijable


148. 
-kreiramo funkciju displayMovements sa movements parametrom
-argument uzimamo iz niza - account1.movements
-dodajemo .forEach metodu - movements.forEach i callback funkciju sa parametrima (mov, i)
-kreiramo varijablu html sa template literals unutar kojih pisemo HTML kod
-dodajemo varijablu const type = mov > 0 ? 'deposit' : 'withdrawal' kao klasu unutar HTML koda u html varijabli;
-ako je mov > 0 tekst ce biti zelene boje, a ako je mov < tekst ce da bude crvene boje
-varijabli containerMovements dodajemo metodu insertAdjacentHTML koja uzima 2 parametra ('afterbegin', html)
-prvi parametar je pozicija gdje zelimo prikazati HTML elemente, a drugi parametar je html varijabla
-na pocetak funkcije dodajemo kod da ispraznimo kontejner za movements ukoliko se nesta vec nalazi u njemu - containerMovements.innerHTML = '';


151. 
-kreiramo funkciju createUsernames u kojoj kao parametar uzimamo accs
-parametru accs dodajemo .forEach() metodu sa callback funkcijom
-callback funkciji dodajemo kao parametar acc
-kreiramo novi key unutar objekta acc.username = acc.owner (pristupamo owner key)
-acc.owner - dodajemo metode .toLowerCase(), .split(' '), .map(name => name[0]), .join('');
-owner je key vrijednost u objektu account1 (pogledati na pocetku fajla)
-pozivamo create Usernames funkciju sa argumentom accounts


153. 
-kreiramo funkciju calcDisplayBalance u kojoj kao parametar uzimamo movements
-parametru movements dodajemo .reduce() metodu sa parametrima acc, mov
-posto zelimo da dobijemo ukupnu vrijednost vracamo ukupni rezulat acc + mov
-broj 0 je u ovom slucaju pocetna inicijalna vrijednost
-rezultat koji dobijemo pohranjujemo u varijablu balance
-labelBalance varijabli dodajemo .textContent metodu i rezultat balance pohranjujemo u nju
-pozivamo funkciju calcDisplayBalance sa argumentom account1.movements (pogledati movements unutar objekta account1)


155. 
-kreiramo funkciju calcDisplaySummary u kojoj kao parametar uzimamo movements
-movements parametru dodajemo .filter() i .reduce() metode
-pomocu .filter() metode filtriramo sve vrijednosti koje su vece od 0
-pomocu .reduce() metode sabiramo sve vrijednost koje su vece od 0
-dobiveni rezulat pomocu ove dvije metode pohranjujemo u incomes varijablu
-isto ovo uradimo i za out varijablu samo sa sa razlikom da filtriramo sve vrijednosti u nizu koje su manje od 0
-pomocu metode .textContent varijabli labelSumIn dodijelimo vrijednost incomes
-pomocu metode .textContent varijabli labelSumOut dodijelimo vrijednost out
-koristimo Math.abs() metodu da ukupni zbir svih dobivenih negativnih vrijednosti predstavimo kao pozitivan broj (crvena boja)
-kreiramo interest varijablu u kojoj ce banka uzimati jedan dio procenta za svaki depozit
-interest varijabli dodijelomo movements parametar sa metodama .filter(), .map() i reduce()
-metoda .filter() filtrira sve pozitivne vrijednosti
-metoda .map() svaki depozit unutar niza ce da pomnozi sa 1.2/100
.nakon toga opet sa .filter() metodom filtriramo samo vrijednosti vece od 1
-metoda .reduce() ce da sabere sve dobijene vrijednosti
-pomocu .textContent metode varijabli labelSumInterest dodijelimo vrijednost interest varijable 
-pozivamo calcDisplaySummary sa argumentom account1.movements


158. Implementiranje login logike
-dugmetu btnLogin dodajemo addEventListener sa dva parametra click i callback funkcijom
-unutar callback funkcije dodajemo e.preventDefault()
-definisemo currentAccount varijablu izvan addEventListeners
-varijabli currentAccount unutar callback funkcije dodjeljujemo vrijednost accounts.find()
-pomocu find metoda trazimo da li se username unutar accounts objekta poklapa sa vrijednostima koje smo unijeli u varijabli inputLoginUsername
-dodajemo if uslov da vidimo da li se pin koji se nalazi u objektima poklapa sa unesenim pinom u varijabli inputLoginPin
-dodajemo optional chaining ?. metodu currentAccount?.pin
-pomocu metode .textContent labelWelcome varijabli dodijelimo vrijednost `Welcome back ` i onda unutar template literals prikazemo samo ime trenutnog korisnika koji se ulogovao 
-varijabli containerApp promjenimo opacity na 100 nakon sto se korisnik uloguje
-unutar if uslova pozivamo funkcije sa parametrima
displayMovements(currentAccount.movements);
calcDisplayBalance(currentAccount.movements);
calcDisplaySummary(currentAccount);
-dodajemo kod pomocu kojeg ocistimo inputLoginUsername i inputLoginPin
-pravimo izmjene u calcDisplaySummary funkcije gdje kao parametar sada uzimamo acc
