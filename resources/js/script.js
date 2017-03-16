$(document).ready(function() {
    // $(this).css("display", "block");
    // $("body header nav div.row").slideDown(1000);

    $(".js--row").css("display", "none");
    $("body header nav div.row").fadeIn(1000, function(e) {
        $(this).css("display", "block");
    });

    $('.js--section-who-we-are').waypoint(function(direction) {

        if (direction == "down") {
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }

    }, {
        offset: '600px'
    });

    /*----nav-scrolling--- */
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /*------------js for animations------------- */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass(' animated fadeInLeft');
    }, {
        offset: '55%'
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass(' animated fadeInUpBig');
    }, {
        offset: '55%'
    });


    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass(' animated zoomIn');
    }, {
        offset: '55%'
    });

});
