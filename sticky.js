// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = $(".navbar");

// Get the offset position of the navbar
var sticky = navbar.offset().top;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.addClass("sticky")
  } else {
    navbar.removeClass("sticky");
  }
}