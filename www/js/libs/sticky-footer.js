function stickyFooter(){
  // Remove top margin set previously by this script
  $('footer').attr('style','');
  // Get the footers height
  let footerHeight = $('footer').outerHeight();
  // Calculate the margin of the footer
  // (it's height with margins - it's height without)
  let footerMarg = $('footer').outerHeight(true) - footerHeight;
  // Calculate the height of all the content by getting the top of the footer
  // + the height of the footer
  let contentHeight = $('footer').offset().top + footerHeight;
  // Get the heihgt of the window/viewport
  let winHeight = $(window).height();
  // If the content height is less than the window height
  if(contentHeight < winHeight){
    // Calculate a new top margin that moves the footer to the bottom
    let newMarg = footerMarg + winHeight - contentHeight;
    $('footer').attr('style',`margin-top:${newMarg}px !important`);
  }
}

// Run the sticky footer once every time the screen resize
$(window).resize(stickyFooter);
// Run the sticky footer function once when the page loads
$(stickyFooter);
// Run the sticky footer function with an interval too
// (we would actually need to call it when we add html dynimacally through
//  JavaScript, but since we are to lazy for that instead call it twice every sec)
// setInterval(stickyFooter, 500);