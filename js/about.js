$(document).ready(function () {
    let lastScrollTop = 0;

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top < window.innerHeight &&
            rect.bottom > 0 &&
            rect.left >= 0 &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkVisibility() {
        const scrollTop = $(window).scrollTop();

        $('.fade-in').each(function () {
            if (isElementInViewport(this) && scrollTop > lastScrollTop) {
                $(this).addClass('visible').css({
                    'opacity': '1',
                    'transform': 'translateY(0)',
                    'transition': 'opacity 0.5s ease, transform 0.5s ease'
                });
            }
        });

        $('.wrapper').each(function () {
            if (isElementInViewport(this)) {
                $(this).addClass('animate').css({
                    'opacity': '1',
                    'transform': 'translateY(0)',
                    'transition': 'opacity 0.5s ease, transform 0.5s ease'
                });
            }
        });

        lastScrollTop = scrollTop;
    }

    checkVisibility();

    let timeout;
    $(window).on('scroll', function () {
        clearTimeout(timeout);
        timeout = setTimeout(checkVisibility, 200);
    });
});
