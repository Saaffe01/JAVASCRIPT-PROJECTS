
// Document.write() method
const fullName = 'Saaffe Algarib';
document.write('<p>Hello ' + fullName + '</p>');
console.log(typeof fullName);

// Combining a string and a number
let age = 29;
const message = 'I am ' + age + ' years old.';
console.log(message);

// LOGICAL OPERATORS 

// Strict
function strictOpertor() {
    document.getElementById('strict').textContent = 'Strict equality (===) checks for both value and type. 5 === "5" is false.';
}

// Loose
function looseOperator() {
    document.getElementById('loose').textContent = 'Loose equality (==) checks for value after type coercion. 5 == "5" is true.';
}

// Greater than
function greaterThan() {
    document.getElementById('greater').textContent = 'Greater than (>) checks if the left operand is greater than the right operand. 10 > 5 is true.';
}

// Less than
function lessThan() {
    document.getElementById('less').textContent = 'Less than (<) checks if the left operand is less than the right operand. 5 < 10 is true.';
}

// Logical AND (&&)
function logicalAnd() {
    document.getElementById('and').textContent = 'Logical AND (&&) returns true if both operands are true. true && false is false.';
}

// Logical OR (||)
function logicalOr() {
    document.getElementById('or').textContent = 'Logical OR (||) returns true if at least one operand is true. true || false is true.';
}

// Logical NOT (!)
function logicalNot() {
    document.getElementById('not').textContent = 'Logical NOT (!) negates the truthiness of the operand. !true is false.';
}