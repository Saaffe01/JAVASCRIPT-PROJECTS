
// function that uses a while loop 

function countToTen() {
    let count = 1;
    while (count <= 10) {
        console.log(count);
        count++;
    }
}
countToTen();


// function that uses a for loop
function countToTenFor() {
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }
}
countToTenFor();

// Write a function that utilizes an array
function printArrayElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

const myArray = ['apple', 'banana', 'cherry'];

printArrayElements(myArray);

// object using "let" keyword 

let person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

console.log(person.name);
console.log(person.age);
console.log(person.city);
