// f_n_d
// (function($) {
    console.log('Pathname', window.location.pathname)
    // $(function() {
        if (window.location.pathname === '/') {
            var menu = $('header.Header');
            var html = menu.html()
            menu.empty();
            var intro = $('#intro');
            intro.append(html);
            var distance = $('.Header-inner').offset().top;
            var bottomNavigation = $('.Mobile-bar.Mobile-bar--bottom');
            bottomNavigation.css({
                display: 'none'
            })
            $window = $(window);
            $window.scroll(function() { // mobile nav
                if (window.innerWidth < 1200) {
                    if (bottomNavigation.css('display').toLowerCase() === 'none') {
                        bottomNavigation.css({
                            display: 'block'
                        })
                    }
                    if ($window.scrollTop() === 0) {
                        bottomNavigation.css({
                            display: 'none'
                        })
                    }
                } else {
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
            })

            function setHeight() {
                windowHeight = $(window).innerHeight();
                $('#intro').css('min-height', windowHeight);
            };
            setHeight();

            $(window).resize(function() {
                setHeight();
            });
        }
    // });
// }(jQuery));
