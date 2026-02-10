
// Ternary Operator Condition
function runCheck() {
    let age = 20;
    const result = age >= 18 ? "Adult." : "Minor.";
    document.getElementById('output').innerHTML = result;
}

// Constructor function 
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const user1 = new Person('Saaffe', 29);
console.log(user1.name); // Output: Saaffe

// connecting a new constructor function to html

function Cat(name) {
    this.name = name;
}

function runCode() {
    const myCat = new Cat('Whiskers');
    document.getElementById('result').innerText = myCat.name;
}

// Nested function 
function outerFunction() {
    let count = 0;

    function innerFunction() {
        count++;
        return count;
    }

    return innerFunction;
}

console.log(outerFunction(10))