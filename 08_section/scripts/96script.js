// 96. The This Keyword

'use strict';

const kerim = {
    name: 'Kerim',
    year: 1996,
    calcAge: function() {
        console.log('kerim.year:', kerim.year); // 1996
        console.log('this.year:', this.year); // 1996
        console.log(kerim.year === this.year); // true
        return 2022 - this.year;
    },
};
console.log(kerim.calcAge()); // 26
