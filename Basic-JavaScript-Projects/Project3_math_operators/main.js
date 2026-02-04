// Math Operations 

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}
// ++ operator 

function increment () {
    let num = 1;
    return ++num;
}
console.log(increment(10));

// -- operator 

function decrement () {
    let num = 10;
    return --num;
}

console.log(decrement(10));

// Math.floor()

function randomNum(){
    return Math.floor(Math.random() * 10);
}

console.log(randomNum(0, 10));

// Math function with javascript 
function add_function() {
    let addition = 2 + 2;
    document.getElementById("Math1").innerHTML = "2 + 2 = " + addition;
};

function subtract_function() {
    let subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML = "5 - 2 = " + subtraction;
};

function multiply_function() {
    let multiplication = 6 * 8;
    document.getElementById("Math3").innerHTML = "6 x 8 = " + multiplication;
};

function divide_function() {
    let division = 48 / 6;
    document.getElementById("Math4").innerHTML = "48 / 6 = " + division;
}

function exponent_function() {
    let exponentiation = 5 ** 3;
    document.getElementById("Math5").innerHTML = "5 ^ 3 = " + exponentiation;
}

function modulus_function() {
    let modulus = 25 % 6;
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + modulus;
}