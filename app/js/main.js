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

  
});