// 219. Coding Challenge #3

'use strict';

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class 
of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class,
and also update the 'brake' method in the 'CarCl' class. They experiment with chining!
DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%
*/


const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h.`);
};

Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h.`);
};

const EV = function(make, speed, charge) {
    Car.call(this, make, speed) 
    this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
};

EV.prototype.accelerate = function() {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}.`);
};

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);  // EV {make: 'Tesla', speed: 120, charge: 23}
tesla.chargeBattery(90);  // EV {make: 'Tesla', speed: 120, charge: 90}
console.log(tesla);
tesla.brake();  // Tesla is going at 115 km/h.
tesla.accelerate();
tesla.accelerate();
