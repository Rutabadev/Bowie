jQuery(document).ready(function () {
    var offset = 250;
    var duration = 300;
    if ($(window).scrollTop() > offset) {
        $('.back-to-top').css({
            "display": "inline"
        });
    }
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });
    jQuery('.back-to-top').click(function (event) {
        event.preventDefault();
        jQuery('html, body').animate({
            scrollTop: 0
        }, duration);
        return false;
    })
});

$(function () {
    $('a[href*="#"]:not([href="#"]):not([href="#myCarousel"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 300);
                return false;
            }
        }
    });
});
