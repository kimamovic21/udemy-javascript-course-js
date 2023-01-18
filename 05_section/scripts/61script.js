// 61. Debugging with the Console and Breakpoints

'use strict';

const measureKelvin = function() {
    const measurement = {
        type: 'temp',
        units: 'celsius',
        // C FIX
        // value: Number(prompt('Degrees celsius:')),
        value: 10,
    };

    // B) FIND
    console.log(measurement);
    console.table(measurement);
    console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);

    const kelvin = measurement.value + 273;
    return kelvin;
};
// A) IDENTIFY THE BUG
console.log(measureKelvin());


// Google chrome -> Sources -> Google chrome debugger


const calcTempAmplitudeBug = function(temps1, temps2){
    
    const temps = temps1.concat(temps2);
    console.log(temps);

    let max = 0;
    let min = 0;

    debugger;
    
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue
        if (curTemp > max) {
            max = curTemp;
        };
        if (curTemp < min) {
            min = curTemp;
        };
    };
    console.log(max);
    console.log(min);
    return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) Identify
console.log(amplitudeBug);
