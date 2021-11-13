const { log } = console
const sections = $('section'),
    nav = $('nav'),
    nav_height = nav.outerHeight()

$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .header__menu, .header').toggleClass('active')
    })
})

$(window).on('scroll', function () {
    const cur_pos = $(this).scrollTop()

    sections.each(function () {
        const top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight()

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active')
            sections.removeClass('active')

            $(this).addClass('active')
            nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active')
        }
    })
})

nav.find('a').on('click', function () {
    const $el = $(this),
        id = $el.attr('href')

    $('html, body').animate(
        {
            scrollTop: $(id).offset().top - nav_height + 1,
        },
        500
    )

    return false
})
