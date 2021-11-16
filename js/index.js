$(document).ready(function () {
    const sections = $('section'),
        nav = $('nav'),
        nav_height = nav.outerHeight(),
        newsletter__input = $('.newsletter__input'),
        newsletter__button = $('.newsletter__button'),
        newsletter__error = $('.newsletter__error'),
        newsletter__form = $('.newsletter__form');

    $('.header__burger').click(function (event) {
        $('.header__burger, .header__menu, .header').toggleClass('active');
    });

    $(window).on('scroll', function () {
        const cur_pos = $(this).scrollTop();

        sections.each(function () {
            const top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass(
                    'active'
                );
            }
        });
    });

    nav.find('a').on('click', function () {
        const $el = $(this),
            id = $el.attr('href');
        $('html, body').animate(
            {
                scrollTop: $(id).offset().top - nav_height + 1,
            },
            500
        );

        return false;
    });

    $(newsletter__button).on('click', function (e) {
        e.preventDefault();
        const regex =
            /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        const text__input = $(newsletter__input).val();
        if (text__input.length === 0) {
            $(newsletter__form).addClass('error');
            $(newsletter__error).addClass('error');
            return;
        }
        if (regex.test(text__input)) {
            newsletter__form.removeClass('error');
            newsletter__error.removeClass('error');
            alert(`✅${text__input}`);
            $(newsletter__input).val('');
        } else {
            $(newsletter__form).addClass('error');
            $(newsletter__error).addClass('error');
        }
    });
});
