// 223. Encapsulation: Protected Properties and Methods

'use strict';

class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        // Protected property
        this._pin = pin;
        this._movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}.`);
    };

    // Public interface of our objects
    getMovements() {
        return this._movements;
    };

    deposit(val) {
        this._movements.push(val);
    };

    withdraw(val) {
        this.deposit(-val);
    };

    _approveLoan(val) {
        return true;
    };

    requestLoan(val) {
        if(this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved!`);
        }
    };
};

const acc1 = new Account('Kerim', 'EUR', 1111, []);
console.log(acc1);

// acc1._movements.push(250);
// acc1._movements.push(-200);
// console.log(acc1);

acc1.deposit(250);
acc1.withdraw(200);
acc1.requestLoan(1000);
acc1._approveLoan(1000);
acc1.getMovements(acc1.getMovements);

console.log(acc1);
console.log(acc1._pin);

// ._ convention
// ._movements is not supposed  to be touched outside of the class
