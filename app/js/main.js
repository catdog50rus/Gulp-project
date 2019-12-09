$(function(){

    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrow__left" src = "images/arrow-left.svg" alt = "">',
        nextArrow: '<img class="slider-arrows slider-arrow__right" src = "images/arrow-right.svg" alt = "">',
        asNavFor: '.slider-dots',
    });
    $('.slider-dots').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
        focusOnSelect: true
    });

    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrow__left" src = "images/arrow-left-dark.svg" alt = "">',
        nextArrow: '<img class="slider-arrows slider-arrow__right" src = "images/arrow-right-dark.svg" alt = "">',
        focusOnSelect: true,
        asNavFor: '.slider__surf-map',
    });

    $('.slider__surf-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: true,
        asNavFor: '.surf-slider',
    });

    $('.page-tour__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrow__left" src = "images/arrow-left-dark.svg" alt = "">',
        nextArrow: '<img class="slider-arrows slider-arrow__right" src = "images/arrow-right-dark.svg" alt = "">',
    });


    const allData = $('.page-tour-slider__info-title');
    let formData = allData.serializeJSON();

    $('total-price').text(getTotalPrice(formData));

    allData.on('keyup change', 'input, select, click, textarea', function () {
        formData = allData.serializeJSON();
        console.log(formData);

        $('total-price').text(getTotalPrice(formData));
    });
    function getTotalPrice(formData) {
        let totalPrice = 0;

        totalPrice =
            formData['night-number'] * 40 +
            formData['guest-number'] * 25;

        return totalPrice.toFixed(0);
    };


  
});