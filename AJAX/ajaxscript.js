
function getMsg () {
    // step 1: create an XMLHttpRequest object

    let ajaxRequest = new XMLHttpRequest();

    // step 2: define a callback function
    let inputVal = document.getElementById("fullName").value;

    // function to display user input value once request has been received
    ajaxRequest.onload = function () {
        document.getElementById("content-area").innerHTML = "Thank you " + inputVal + " for signing up!"
    }
    // Step 2: Prepare the request
    ajaxRequest.open('GET', 'content.html', true);

    // Step 3: Defines the AJAX response callback method that establoshes the connection and sends the request to the server
    ajaxRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById('content').innerHTML = ajaxRequest.responseText
        }
    }

    // Step 4: Send the request to the server
    ajaxRequest.send();   
}