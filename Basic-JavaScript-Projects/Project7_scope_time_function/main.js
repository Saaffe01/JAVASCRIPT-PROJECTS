
// Assigning a global and local variable 
let globalVariable = "I am global"; 

function example() {
  let localVariable = "I am local"; // Local var
  console.log(globalVariable, localVariable);
}
example();

// write a function that uses an if else statement 
// feel free to change the hour of your liking to see the different outputs


function hourGreeting(hour) {
    if (hour >= 6 && hour < 12) 
        console.log('Good morning!');
    else if (hour >= 12 && hour < 18)
        console.log('Good Afternoon');
    else 
        console.log('Good Evening');
}

hourGreeting(10);

// write a function that throws an error

function add(a, b) {
    console.log("a =", a);
    console.log("b =", b);
    return a + c; // intentional error: c is not defined
  }
  
  add(2, 3);
// This error shoule be fixed since c is not defined 

// Time function from step 151 

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 && Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 && Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

// 

function full_Sentence() {
    let part1 = "I have ";
    let part2 = "made this ";
    let part3 = "into a complete ";
    let part4 = "sentence.";
    let whole_sentence = part1.concat(part2, part3, part4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}