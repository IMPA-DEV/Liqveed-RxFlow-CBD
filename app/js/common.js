$(function() {

    var windowEl = $(window);
    var windowW = windowEl.width();

	// Custom JS
    console.log('work');

    $('.composition-trigger').on('click', function () {
        $('.composition').slideToggle(500);
        $(this).toggleClass('composition-trigger-activ');
    });
    $('.composition-cross').on('click', function () {
        $('.composition').slideUp(500);
    })

    // services-item
    $('.benefits-slider-button').on('click', function (event) {
        $(this).addClass('benefits-activ').siblings().removeClass('benefits-activ');
    });

    //services-item fix
    $('.benefits-button-one').on('click', function (event) {
        $('.benefits-slide-one').fadeIn(1000).css('display', 'flex').siblings().hide().stop(true, true);
    });
    $('.benefits-button-two').on('click', function (event) {
        $('.benefits-slide-two').fadeIn(1000).css('display', 'flex').siblings().hide().stop(true, true);
    });
    $('.benefits-button-three').on('click', function (event) {
        $('.benefits-slide-three').fadeIn(1000).css('display', 'flex').siblings().hide().stop(true, true);
    });
    $('.benefits-button-four').on('click', function (event) {
        $('.benefits-slide-four').fadeIn(1000).css('display', 'flex').siblings().hide().stop(true, true);
    });

    $('#slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [{
            breakpoint: 767,
            settings: {
                arrows: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                adaptiveHeight: true,
            }
        },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                }
            },
        ]
    });

    if (windowW < 991) {
        $('.benefits-slider-buttons').children('li').removeClass('ben-hov');
        $('.benefits-slider-button').unbind('mouseenter mouseleave');
        $('.composition-info-items, .review-items').slick({
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        });

        // плавный переход по якорям
        $(".btn").not('.home-submit-btn').on("click", function (event) {
            event.preventDefault();
            var top = $(".home-form-wrapp").offset().top;
            $('body,html').animate({ scrollTop: top }, 500);
            return false;
        });

    } else {
        // плавный переход по якорям
        $(".btn").not('.home-submit-btn').on("click", function (event) {
            event.preventDefault();
            var top = $("#home").offset().top;
            $('body,html').animate({ scrollTop: top }, 500);
            return false;
        });

        $(".popup-form-wrapp-cross").not('.home-submit-btn').on("click", function (event) {
            $('.popup-wrapp').removeClass('popup-wrapp-open');
            $('.popup-form-wrapp').fadeOut('500');
            $('.popup-success').fadeOut('500');

            return false;
        });
    };


    $('#payment-form__check').on('click', function () {
        if ($(this).is(':checked')) {
            $('input[type="submit"]').removeAttr('disabled');
        } else {
            $('input[type="submit"]').attr('disabled', true);
        }
    });

    $('#form-check__address').on('click', function () {
        var payAdr = $('.payment-form__address');
        if ($(this).is(':checked')) {
            payAdr.slideUp(300);
        } else {
            payAdr.slideDown(300);
            payAdr.children('input').each(function () {
                $(this).prop('required', true);
            });
        }
    });

    // Date
    var date = new Date();
    var year = date.getFullYear();
    var day = date.getDate();
    var month = date.getMonth();
    var numberDay = date.getDay();
    var dd, mm;
    var stкNumberDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var stkMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    for (var i = 0; i < stкNumberDay.length; i++) {
        if (i == numberDay) {
            dd = stкNumberDay[i];
        }
    }
    for (var j = 0; j < stkMonth.length; j++) {
        if (j == month) {
            mm = stkMonth[j];
        }
    }

    var htmlDay = document.getElementById('today');
    $(htmlDay).html(dd + ", " + mm + " " + day + ", " + year);

});
