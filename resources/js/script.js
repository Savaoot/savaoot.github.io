$(document).ready(function() {
    // $(this).css("display", "block");
    // $("body header nav div.row").slideDown(1000);

    setTimeout(showScreenDiv, 0);
    setTimeout(showLeftDiv, 4500);
    setTimeout(showRightDiv, 4500);

    $("header nav div.row").css("display", "none");
    $("header nav div.row").fadeIn(1000, function(e) {
        $(this).css("display", "block");
    });

    $('.js--section-who-we-are').waypoint(function(direction) {

        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');

        }

    }, {
        offset: $(window).height() - $("header nav div.row").height()
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
//header functions

//id: lph-1, lph-2, lph-3, lph-4
function showLeftDiv() {
    setTimeout(function() {
        $("#lph-1").css("display", "block");
        $("#lph-1").addClass("animated bounceInDown");
    }, 0);
    setTimeout(function() {
        $("#lph-2").css("display", "block");
        $("#lph-2").addClass("animated bounceInDown");
    }, 600);
    setTimeout(function() {
        $("#lph-3").css("display", "block");
        $("#lph-3").addClass("animated bounceInDown");
    }, 1200);
    setTimeout(function() {
        $("#lph-4").css("display", "block");
        $("#lph-4").addClass("animated bounceInDown");
    }, 1800);
}

function showRightDiv() {
    setInterval(function() {
        $("#right_part").css("display", "block");
        $("#right_part").addClass("animated fadeInDown");
    }, 2400);
}

//id: first_screen_p, second_screen_p
function showScreenDiv() {
    setTimeout(function() {
        $("#first_screen_p").css("display", "block");
    }, 500);
}