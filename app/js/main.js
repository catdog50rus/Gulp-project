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
        prevArrow: '<img class="slider-arrows slider-arrow__left" src = "images/arrow-left.svg" alt = "">',
        nextArrow: '<img class="slider-arrows slider-arrow__right" src = "images/arrow-right.svg" alt = "">',
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

  
});