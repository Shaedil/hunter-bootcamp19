window.onscroll = function () { scrollFunction() }

function scrollFunction () {
  if((window).scrollTop() > 50) {
    ('.header').addClass("active")
  } else {
    // remove the background property so it comes transparent again (defined in your css)
    ('.header').removeClass("active")
  }
};
