// 225. Chaining Methods

'use strict';

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
    // 1) Public fields (instances)
    locale = navigator.language;
    
    // 2) Private fields (instances)
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        // Protected property
        this.#pin = pin;

        console.log(`Thanks for opening an account, ${owner}.`);
    };

    // 3) Public methods
    // Public interface of our objects
    getMovements() {
        return this.#movements;
    };

    deposit(val) {
        this.#movements.push(val);
        return this;  // this is current object
    };

    withdraw(val) {
        this.deposit(-val);
        return this;
    };

    requestLoan(val) {
        // if(this.#approveLoan(val)) {
            if(this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved!`);
            return this;
        }
    };

    static helper() {
        console.log('Helper function');
    };

    // 4) Private methods
    // #approveLoan(val) {
        _approveLoan(val) {
        return true;
    };
};

const acc1 = new Account('Kerim', 'EUR', 1111);
console.log(acc1);

// acc1._movements.push(250);
// acc1._movements.push(-200);
// console.log(acc1);

acc1.deposit(250);
acc1.withdraw(200);
acc1.requestLoan(1000);
// acc1._approveLoan(1000);
acc1.getMovements(acc1.getMovements);

console.log(acc1);
// console.log(acc1._pin);

// ._movements is not supposed  to be touched outside of the class

// Does not work in this example !!!
// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));

Account.helper();  // Helper function


// Chaining
acc1
    .deposit(300)
    .deposit(500)
    .withdraw(35)
    .requestLoan(25000)
    .withdraw(4000);
    
console.log(acc1.getMovements());  // (8) [250, -200, 1000, 300, 500, -35, 25000, -4000]

// keyword this will make methods chainable
