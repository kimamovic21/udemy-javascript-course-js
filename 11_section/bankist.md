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
