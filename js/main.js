$(document).ready(function () {
    $(".menu-link").click(function () {
        $('.add_menu').css({
            transform: 'translateX(0%)'
        });
    });
    $(".close-btn").click(function () {
        $('.add_menu').css({
            transform: 'translateX(-100%)'
        });
    });
    $(".add_menu ul li a").click(function (e) {
        event.preventDefault();
        var $attr = $(this).attr("href");
        var $pos = $($attr).offset().top;
        $("html, body").animate({
              scrollTop: $pos,
            },800
        );
        $('.add_menu').css({
            transform: 'translateX(-100%)'
        });
    })
});