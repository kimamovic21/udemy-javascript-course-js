// 19. Encapsulation: Private Class Fields and Methods

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
    };

    withdraw(val) {
        this.deposit(-val);
    };

    requestLoan(val) {
        // if(this.#approveLoan(val)) {
            if(this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved!`);
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
console.log(acc1);  // Account

// acc1._movements.push(250);
// acc1._movements.push(-200);
// console.log(acc1);

acc1.deposit(250);
acc1.withdraw(200);
acc1.requestLoan(1000);
// acc1._approveLoan(1000);
acc1.getMovements(acc1.getMovements);

console.log(acc1);  // Account
// console.log(acc1._pin);

// ._movements is not supposed  to be touched outside of the class

// Does not work in this example !!!
// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));

Account.helper();  // Helper function

