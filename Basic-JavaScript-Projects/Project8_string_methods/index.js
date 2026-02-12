
// writing functions to for each method: concat(), slice(), toString(), toPrecise()

// concat() method 
function concat() {
    return [1, 2].concat([3, 4]);
}

// slice() method
function slice() {
    return [10, 20, 30].slice(0, 2);
}

// toString() method
function stringConversion() {
    return (1234).toString();
}

// toPrecision() method
function preciseConversion() {
    return (3.14159).toPrecision(3);
}


// These functions run in the browser .
function results() {
    document.getElementById('concatResult').textContent = "concat(): " + concat();
    document.getElementById('sliceResult').textContent = "slice(): " + slice();
    document.getElementById('stringConversionResult').textContent = "toString(): " + stringConversion();
    document.getElementById('preciseConversionResult').textContent = "toPrecision(): " + preciseConversion();
}

