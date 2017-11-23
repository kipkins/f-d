$(document).ready(function() {
  var menu = $('header.Header');
  var html = menu.html();
  var intro = $('#intro');
  $window = $(window);
  var distance = $('.Header-inner').offset().top;
  var bottomNavigation = $('.Mobile-bar.Mobile-bar--bottom');


  if(window.location.pathname === "/"){
    bottomNavigation.css({
        display: 'none'
    })
    $(window).scroll(function() {
    if(window.innerWidth < 1200) {
      mobileScreenTricks();
    }
    else fullScreenTricks();
    });
  }
});




function mobileScreenTricks(){
  if (bottomNavigation.css('display').toLowerCase() === 'none') {
      bottomNavigation.removeAttr("style");
  }
  if ($window.scrollTop() === 0) {
      bottomNavigation.css({
          display: 'none'
      })
  }
}

function fullScreenTricks(){
  if (distance === 0) {
      distance = $('.Header-inner').offset().top;
  }
  if ($window.scrollTop() >= distance) {
      $('.Header-inner').remove();
      $(menu).append(html);
  } else {
      menu.empty();
      var exists = $('.Header-inner');
      if (exists.length === 0) {
          intro.append(html);
      }
  }
}
