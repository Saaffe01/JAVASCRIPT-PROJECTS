const slides = ["images/corvette.jpg", "images/lamborghini.jpg", "images/sf90.jpg"];
    let currentIndex = 0;
    let timeLeft = 5;

    // countdown function
    function countdown() {
        timeLeft--;
        
        if (timeLeft <= 0) {
            changeSlide(1); 
        }
        
        document.getElementById("timer").innerText = timeLeft;
    }

    // function to change the slide
    function changeSlide(direction) {
        currentIndex += direction;


        if (currentIndex >= slides.length) currentIndex = 0;
        if (currentIndex < 0) currentIndex = slides.length - 1;

        // updating the html
        document.getElementById("slide-display").src = slides[currentIndex];

        timeLeft = 5; 
        document.getElementById("timer").innerText = timeLeft;
    }

        function manualChange(direction) {
        changeSlide(direction);
    }

    setInterval(countdown, 1000);