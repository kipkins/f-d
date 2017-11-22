window.onload = function(){
        var bottomNavigation = $('.Mobile-bar.Mobile-bar--bottom');
      if(bottomNavigation.length > 0){
//        var position = bottomNavigation.offset().top;
          bottomNavigation.css({display: 'none'})
        $(window).scroll(function(){
            if(bottomNavigation.css('display').toLowerCase() === 'none'){
                bottomNavigation.css({display: 'block'})
            }
            if($(window).scrollTop() === 0){
                bottomNavigation.css({display: 'none'})
            }
        })
      }
      else {
        var menu = $('header.Header');
        var html = menu.html()
        menu.empty();
        var intro = $('#intro');
        intro.append(html);
        var distance = $('.Header-inner').offset().top;

        $window = $(window);
        $window.scroll(function() {
          if ( $window.scrollTop() >= distance ) {
               $('.Header-inner').remove();
               $(menu).append(html);
               //$(menu).css({position: 'fixed', top: '0', left: '0', right: '0'})
          }
          else {

            menu.empty();
            var exists = $('.Header-inner');
            if(exists.length === 0){
                intro.append(html);
            }
          }
        });
   }
}