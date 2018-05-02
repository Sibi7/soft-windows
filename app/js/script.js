$(document).ready(function () {
    var link = $('.menu-link');
    var link_active = $('.menu-link_active');

    link.click(function () {

        link.toggleClass('menu-link_active');
        return false
    })
    $(".menu-link").click(function () {
        $(".nav__inner").slideToggle("slow", function () {
        });
        return false
    });

    $('.offer__item-big-link').fancybox();

    $('.offer__item-preview-link').fancybox();

    $('.our-works__item').fancybox();

    $(document).on('click', '.what-is__arrow-wrap a', function (event) {
        var href = $(this).attr('href');
        var target = $(href);
        var top = target.offset().top;
        $('html,body').animate({scrollTop: top}, 1000);
        return false;
    });
    jQuery(function($){
        $("#phone").mask("+7 (999) 999-9999");
    });
    $("#calc-form").validate({
        rules:{
            name:{
                required: true,
                minlength: 3,
            },
            phone:{
                required: true,
            },
        },
        messages:{
            name:{
                required:'Введите Ваше имя',
                minlength: 'Минимум 3 буквы'
            },
            phone:{
              required: 'Введите Ваш телефон',
            }
        }
    });
});