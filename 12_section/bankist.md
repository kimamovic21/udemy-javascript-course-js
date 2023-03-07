Project "Bankist" App

146. 
-flowchart - logika aplikacije
-pohranjivanje HTML elemenata u JS varijable


147. 
-kreiramo funkciju displayMovements sa movements parametrom
-dodajemo .forEach metodu - movements.forEach i callback funkciju sa parametrima (mov, i)
-kreiramo varijablu html sa template literals unutar kojih pisemo HTML kod
-dodajemo varijablu const type = mov > 0 ? 'deposit' : 'withdrawal' kao klasu unutar HTML koda u html varijabli;
-ako je mov > 0 div u kojem se nalazi pozitivne vrijednost ce biti zelene boje, a ako je mov < div u kojem se 
nalaze negativne vrijednosti ce da bude crvene boje
-varijabli containerMovements dodajemo metodu insertAdjacentHTML koja uzima 2 parametra ('afterbegin', html)
-prvi parametar je pozicija gdje zelimo prikazati HTML elemente, a drugi parametar je html varijabla
-na pocetak funkcije dodajemo kod da ispraznimo kontejner za movements ukoliko se nesta vec nalazi u 
njemu - containerMovements.innerHTML = '';
-pozivamo funkciju sa argumentom iz niza account1.movements


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
-interest varijabli dodijelimo movements parametar sa metodama .filter(), .map() i reduce()
-metoda .filter() filtrira sve pozitivne vrijednosti
-metoda .map() svaki depozit unutar niza ce da pomnozi sa 1.2/100
-nakon toga opet sa .filter() metodom filtriramo samo vrijednosti vece od 1
-metoda .reduce() ce da sabere sve dobijene vrijednosti
-pomocu .textContent metode varijabli labelSumInterest dodijelimo vrijednost interest varijable 
-pozivamo calcDisplaySummary sa argumentom account1.movements


158. 
-dugmetu btnLogin dodajemo addEventListener sa dva parametra click i callback funkcijom
-unutar callback funkcije dodajemo e.preventDefault()
-definisemo currentAccount varijablu izvan addEventListeners
-varijabli currentAccount unutar callback funkcije dodjeljujemo vrijednost accounts.find()
-pomocu find metoda trazimo da li se username unutar accounts objekta poklapa sa vrijednostima koje smo 
unijeli u varijabli inputLoginUsername
-dodajemo if uslov da vidimo da li se pin koji se nalazi u objektima poklapa sa unesenim pinom u 
varijabli inputLoginPin
-dodajemo optional chaining ?. metodu - currentAccount?.pin
-dodajemo Number() metodu za inputLoginPin.value da pretvorimo unesenu vrijednost u broj
-pomocu metode .textContent labelWelcome varijabli dodijelimo vrijednost `Welcome back ` i onda unutar
 template literals prikazemo samo ime trenutnog korisnika koji se ulogovao pomocu metodu .split()
-varijabli containerApp promjenimo opacity na 100 nakon sto se korisnik uloguje
-unutar if uslova pozivamo funkcije sa parametrima
displayMovements(currentAccount.movements);
calcDisplayBalance(currentAccount.movements);
calcDisplaySummary(currentAccount);
-dodajemo kod pomocu kojeg ocistimo inputLoginUsername i inputLoginPin
-pravimo izmjene u calcDisplaySummary funkcije gdje kao parametar sada uzimamo acc


159. 
-dugmetu btnTransfer dodajemo addEventListener sa dva parametra click i callback funkcijom
-unutar callback funkcije dodajemo e.preventDefault()
-vrijednost koju unesemo unutar inputTransferAmountl.value varijable pretvorimo u broj pomocu Number() funkcije
-vrijednost koju smo unijeli pohranimo u amount varijablu
-account nizu dodajemo .find() metodu pomocu koje pronalazimo account u nizu i provjerevamo da li je account 
koji imamo u nizu jednak sa accountom koji smo unijeli u input polje inputTransferTo.value
-u funkciji calcDisplayBalance mijenjamo parametar u acc
-acc.movements.reduce pohranjujemo unutar acc.balance
-u callback funkciji unutar btnTransfer.addEventListener dodajemo if uslov za transfer novca
-unutar if uslova dodajemo uslov da amount mora biti veci od 0, dad li primaoc postoji, balans trenutnog accounta 
mora biti veci-jednak od amount, account primaoca ne smije biti isti od trenutnog accounta sa kojim smo ulogovani
-dodajemo optional chaining ?. kod receiverAcc?.amount
-ako receiverAcc ne postoji pojavit ce se undefined u konzoli
-dodajemo .push(-amount) metodu pomocu koje trenutnom posiljaocu oduzimamo novac iz ukupnog niza koji je poslao za 
onu vrijednost koju smo unijeli u amount varijablu
-dodajemo .push(amount) metodu pomocu koje primaocu dodajemo novac koji smo unijeli u amount varijalbu
-kreiramo novu funkciju updateUI sa parametrom acc 
-unutar updateUI funkcije pozivamo tri funkcije
     displayMovements(acc.movements);
     calcDisplayBalance(acc);
     calcDisplaySummary(acc);
-u callback funkcije unutar btnLogin dodajemo funkciju updateUI(currentAccount);
-u callback funkciji unutar btnTransfer dodajemo funkciju updateUI(currentAccount);
-nakon sto pritisnemo dugme za btnTransfer ocistimo input polja tako sto varijablama inputTransferAmount.value i 
inputTransferTo.value dodijelimo prazan string


160. 
-dugmetu btnClose dodajemo addEventListener sa dva parametra click i callback funkcijom
-unutar callback funkcije dodajemo e.preventDefault()
-dodajemo uslov pomocu kojeg provjeravamo da li je uneseno username u polje isto onom sa kojim smo ulogovani
-na taj uslov dodajemo && i provjeravamo da je uneseni pin u polje isti onom sa kojim smo ulogovani
-pomocu metode .findIndex() provjeravamo u account nizu da li postoji account sa username koji je jednak
 usernamu sa kojim smo trenutno ulogovani i dobivenu vrijednost pohranimo u index varijablu
-ukoliko je uslov zadovoljen, nakon toga dodajemo .splice() metodu sa dva prametra (index, 1), kojom brisemo
 trenutni account sa kojim smo ulogovani
-index predstavlja vrijednost koju smu pohranili u varijablu, dok broj 1 predstavlja koliko elemenata 
zelimo izbrisati


161.  
-dugmetu btnLoan dodajemo addEventListener sa dva parametra click i callback funkcijom
-vrijednost unesenu u varijablu inputLoanAmount.value pohranimo u varijablu amount
-dodajemo uslov da vrijednost amount mora biti vece od 0 i da bilo koji depozit mora biti veci 10% od zahtjeva
-ukoliko je uslov ispunjen, onda unutar tog uslova pomocu metode .push() vrijednost amount dodajemo u niz movements
-pozivamo funkciju updateUI() sa parametrom currentAccount
-ocistimo polje inputLoanAmount.value


163. 
-funkciji displayMovements() dodajemo jos jedan parametar sort = false
-kreiramo novu varijablu movs koju definisemo sa uslovom
-ako je sort true, onda movements nizu dodajemo metode .slice() i sort(), a ako je sort false onda prikazujemo samo movements
-umjesto movements.forEach() sada pisemo movs.forEach()
-dugmetu btnSort dodajemo addEventListener sa dva parametra click i callback funkcijom
-unutar callback funkcije dodajemo e.preventDefault() funkciju
-pozivamo displayMovements funkciju sa dva parametra
-definisemo varijablu sorted i dodjeljujemo joj vrijednost true
-dodajemo sorted = !sorted; da mozemo mjenjati stanje varijable iz true u false


171. 
-u btnLoan addEventListeneru, u callback funkciji, dodajemo Math.floor u varijabli amount
-u funkciji displayMovements dodajemo mov.toFixed(2) unutar html varijable
-u funkciji calcDisplayBalance dodajemo acc.balance.toFixed(2) u varijabli labelBalance.textContent
-u funkciji calcDisplaySummary dodajemo .toFixed(2) varijablama labelSumIn, labelSumOut i labelSumInterest



