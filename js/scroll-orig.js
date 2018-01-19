$(document).ready(function () {
    $(document).on("scroll", onScroll);
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        $('a').each(function () {
            $(this).removeClass('bg-primary');
        })
        $(this).addClass('bg-primary');
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 600, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var percent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
    $(".scroll-progress").width(percent+ '%')
    var scrollPos = $(document).scrollTop();
    $('.nav-list a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navlist li a').removeClass("bg-primary text-warning").addClass("text-secondary");
            currLink.addClass("bg-primary text-warning").removeClass("text-secondary");
        }
        else{
            currLink.removeClass("bg-primary text-warning").addClass("text-secondary")
        }
    });
}
