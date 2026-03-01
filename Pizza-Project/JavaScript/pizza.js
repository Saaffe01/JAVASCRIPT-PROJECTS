
// this function is triggered when the user clicks the "Order" button. It calculates the total price of the pizza based on the selected size and toppings, and updates the HTML to show the order summary and total price.

function getReceipt() {
  let text1 = "<h3>You Ordered:</h3>";
  let runningTotal = 0;
  let sizeTotal = 0;
  let selectedSize = "";
  let sizeArray = document.getElementsByClassName("size");

  for (let i = 0; i < sizeArray.length; i++) {
    if (sizeArray[i].checked) {
      selectedSize = sizeArray[i].value;
      text1 = text1 + selectedSize + "<br>";
    }
  }

  if (selectedSize === "Personal Pizza") {
    sizeTotal = 6;
  } else if (selectedSize === "Medium Pizza") {
    sizeTotal = 10;
  } else if (selectedSize === "Large Pizza") {
    sizeTotal = 14;
  } else if (selectedSize === "Extra Large Pizza") {
    sizeTotal = 16;
  }

  runningTotal = sizeTotal;
  getTopping(runningTotal, text1);
}


// this function executes after the size total has been calculated. It checks which toppings have been selected, calculates the total price for the toppings (with the first topping being free), and updates the HTML to show the order summary and total price.
function getTopping(runningTotal, text1) {
  let toppingTotal = 0;
  let selectedTopping = [];
  let toppingArray = document.getElementsByClassName("toppings");

  for (let j = 0; j < toppingArray.length; j++) {
    if (toppingArray[j].checked) {
      selectedTopping.push(toppingArray[j].value);
      text1 = text1 + toppingArray[j].value + "<br>";
    }
  }

  let toppingCount = selectedTopping.length;
  if (toppingCount > 1) {
    toppingTotal = toppingCount - 1;
  } else {
    toppingTotal = 0;
  }
 // Here we call the getTopping function and pass in the runningTotal and text1 variables to calculate the total price of the toppings and update the order summary text. We then update the HTML to show the order summary and total price to the user.
  runningTotal = runningTotal + toppingTotal;
  console.log("total selected topping items: " + toppingCount);
  console.log(
    toppingCount + " topping - 1 free topping = $" + toppingTotal + ".00"
  );
  console.log("topping text1: " + text1);
  console.log("Purchase Total: $" + runningTotal + ".00");
  document.getElementById("showText").innerHTML = text1;
  document.getElementById("totalPrice").innerHTML =
    "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
}

