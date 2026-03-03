
$(document).ready(function () {
    // Shineloop uses the animate() method to animate the background position of elements with the class of shine, creating a shining effect by moving the background image horizontally across the element. The first animate() call moves the background to 1600px over 3000 milliseconds, and the second animate() call moves it back to -800px over another 3000 milliseconds, creating a continuous loop of the shine effect.
    function shineLoop() {
        $(".shine").animate({ backgroundPositionX: '1600px' }, 3000)
            .animate({ backgroundPositionX: '-800px' }, 3000);
    };
    // setInterval method is used to call the shineLoop function every 0 milliseconds to create a continuous loop of the shine effect on the elements with the class of shine
    setInterval(shineLoop, 0);

    //Shrinks header size when the document is scrolled down by 50 pixels
    $(document).on("scroll", function () {
        if ($(document).scrollTop() > 50) {
            $("h1").addClass("header-scrolled");
        } else {
            $("h1").removeClass("header-scrolled");
        }
    });

    $("#classicCars").on({
        mouseenter: function () {
            $("#titleOne").show(1000);
            $("#titleTwo").show(1500);
            $("#titleThree").show(2000);
        },
        // triggers the images to slide up and disappear when the mouse leaves the image
        mouseleave: function () {
            $("#titleOne").hide(2000);
            $("#titleTwo").hide(1500);
            $("#titleThree").hide(1000);
        }
    });


    // creates a click event for the div with the class of question and uses the next() method to select the next sibling element and applies the slideToggle() method to it
    $('div.question').on('click', function() {
        $(this).next().slideToggle('slow');
    });
});