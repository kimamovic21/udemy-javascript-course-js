// 17. Another Class Example

'use strict';

class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        // Properties that are not based on inputs
        this.movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}.`);
    };

    // Public interface of our objects
    deposit(val) {
        this.movements.push(val);
    };

    withdraw(val) {
        this.deposit(-val);
    };

    approveLoan(val) {
        console.log(val);
        return true;
    };

    requestLoan(val) {
        if(this.approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved!`);
        }
    };
};

const acc1 = new Account('Kerim', 'EUR', 1111, []);
console.log(acc1);  // Account

// acc1.movements.push(250);
// acc1.movements.push(-200);
// console.log(acc1);

acc1.deposit(250);
acc1.withdraw(200);
acc1.requestLoan(1000);
acc1.approveLoan(1000);

console.log(acc1);  // Account
console.log(acc1.pin);  // 1111
