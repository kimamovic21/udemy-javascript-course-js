// 163. Sorting Arrays

'use strict';

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };
  
  const accounts = [account1, account2, account3, account4];
  
  
  // Elements
  const labelWelcome = document.querySelector('.welcome');
  const labelDate = document.querySelector('.date');
  const labelBalance = document.querySelector('.balance__value');
  const labelSumIn = document.querySelector('.summary__value--in');
  const labelSumOut = document.querySelector('.summary__value--out');
  const labelSumInterest = document.querySelector('.summary__value--interest');
  const labelTimer = document.querySelector('.timer');
  
  const containerApp = document.querySelector('.app');
  const containerMovements = document.querySelector('.movements');
  
  const btnLogin = document.querySelector('.login__btn');
  const btnTransfer = document.querySelector('.form__btn--transfer');
  const btnLoan = document.querySelector('.form__btn--loan');
  const btnClose = document.querySelector('.form__btn--close');
  const btnSort = document.querySelector('.btn--sort');
  
  const inputLoginUsername = document.querySelector('.login__input--user');
  const inputLoginPin = document.querySelector('.login__input--pin');
  const inputTransferTo = document.querySelector('.form__input--to');
  const inputTransferAmount = document.querySelector('.form__input--amount');
  const inputLoanAmount = document.querySelector('.form__input--loan-amount');
  const inputCloseUsername = document.querySelector('.form__input--user');
  const inputClosePin = document.querySelector('.form__input--pin');
  
  
const displayMovements = function(movements, sort = false) {
      containerMovements.innerHTML = '';

      const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

      movs.forEach(function(mov, i) {
          const type = mov > 0 ? 'deposit' : 'withdrawal';
          const html = `
              <div class="movements__row">
                  <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
                  <div class="movements__value">${mov} €</div>
              </div>
          `;
          containerMovements.insertAdjacentHTML('afterbegin', html);
      });
};


const calcDisplayBalance = function(acc) {
    acc.balance = acc.movements.reduce((acc, mov) => {
        return acc + mov;
    }, 0);
    labelBalance.textContent = `${acc.balance} €`;
};


const calcDisplaySummary = function(acc) {
    const incomes = acc.movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes} €`;

    const out = acc.movements
        .filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(out)} €`;

    const interest = acc.movements
        .filter(mov => mov > 0)
        .map(deposit => deposit * acc.interestRate / 100)
        .filter((int, i, arr) => {
            // console.log(arr);
            return int >= 1;
        })
        .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${interest} €`;
};


const createUsernames = function(accs) {
    accs.forEach(function(acc) {
       acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');
    });
};
createUsernames(accounts);
// console.log(accounts);  // (4) [{…}, {…}, {…}, {…}]


const updateUI = function(acc) {
     // Display movements
     displayMovements(acc.movements);

     // Display balance
     calcDisplayBalance(acc);

     // Display summary
     calcDisplaySummary(acc);
};


// Event handlers
let currentAccount; 

btnLogin.addEventListener('click', function(e) {
    // Prevent form from submitting
    e.preventDefault();
    // console.log('Login');

    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
    console.log(currentAccount);

    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        // console.log('Login');

        // Display UI and Welcome message
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
        containerApp.style.opacity = 100;

        // Clear input fields
        inputLoginUsername.value = '';
        inputLoginPin.value = '';
        inputLoginPin.blur();

        //  Update UI
        updateUI(currentAccount) ;
    };
});

btnTransfer.addEventListener('click', function(e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
    inputTransferAmount.value = '';
    inputTransferTo.value = '';
    // console.log(amount);
    // console.log(receiverAcc);
    if (
        amount > 0 && 
        receiverAcc &&
        currentAccount.balance >= amount && 
        receiverAcc?.username !== currentAccount.username) {
        // Doing the transfer
        // console.log('Transfer valid!');
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);

        // Update UI
        updateUI(currentAccount);
    };
});


btnLoan.addEventListener('click', function(e) {
    e.preventDefault();

    const amount = Number(inputLoanAmount.value);

    if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
        // Add movement
        currentAccount.movements.push(amount);

        // Update UI
        updateUI(currentAccount);
    };

    inputLoanAmount.value = '';
});


btnClose.addEventListener('click', function(e) {
    e.preventDefault();
    // console.log('Delete');

    if(inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
        const index = accounts.findIndex(acc => acc.username === currentAccount.username);
        console.log(index);

        // Delete account
        accounts.splice(index, 1);

        // Hide UI
        containerApp.style.opacity = 0;
    };

    inputCloseUsername.value = '';
    inputClosePin.value = '';
});


let sorted = false;

btnSort.addEventListener('click', function(e) {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
});



// sort() - mutates the original array

const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());  // (4) ['Adam', 'Jonas', 'Martha', 'Zach']
console.log(owners);  // (4) ['Adam', 'Jonas', 'Martha', 'Zach']

// sort() - converts everything to strings
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements.sort());  // (8) [-130, -400, -650, 1300, 200, 3000, 450, 70]


// return < 0, A, B (keep order)
// return > 0, B, A (switch order)


// Ascending
movements.sort((a, b) => {
    if(a > b) return 1;
    if(a < b) return -1;
});
console.log(movements); // (8) [-650, -400, -130, 70, 200, 450, 1300, 3000]


// Descending
movements.sort((a, b) => {
    if(a > b) return -1;
    if(a < b) return 1;
});
console.log(movements); // (8) [3000, 1300, 450, 200, 70, -130, -400, -650]


movements.sort((a, b) => a - b);
console.log(movements);  // (8) [-650, -400, -130, 70, 200, 450, 1300, 3000]

movements.sort((a, b) => b - a);
console.log(movements);  // (8) [3000, 1300, 450, 200, 70, -130, -400, -650]
