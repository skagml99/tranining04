$(function () {
    $('.wrap').fullpage({
        // css3: false,
        anchors: ['intro', 'info', 'showroom', 'footer'],
        // navigation: true,
        afterLoad: function (a, idx) {
            console.log(a, idx);
            $('.section').removeClass('on');
            $('.section').eq(idx - 1).addClass('on');

            $('.anchor a').removeClass('on');
            $('.anchor a').eq(idx - 1).addClass('on');

            if (idx == 4) {
                $('.header').addClass('on')
                $('.anchor').addClass('on')
            } else {
                $('.header').removeClass('on')
                $('.anchor').removeClass('on')
            }
        }
    })

    $('.header .gnb>ul>li>a').on('click', function (e) {
        e.preventDefault();
        $('.header .gnb>ul ul').stop().slideUp();
        $(this).next().slideToggle();
    });

})