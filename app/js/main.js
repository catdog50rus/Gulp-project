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
        focusOnSelect: false,
        
    });

    const guestPlus = $('.guest__plus');
    const guestMinus = $('.guest__minus');
    const nightPlus = $('.night__plus');
    const nightMinus = $('.night__minus');
    let guest = 1;
    let night = 1;
    let totalPrice = 0;
    let titleNumNight = $('.title_night-number');
    let titleNumGuest = $('.title_guest-number');
    let titleTotalPrice = $('.title_total-price');
    let spanPerNight = $('.per-night');
    print();

    guestMinus.click(function () {
        guest--;
        if (guest < 0) {
            guest = 0;
        }

        print();
        console.log(guest);

    });
    
    guestPlus.click(function(){
        guest++;

        print();
        console.log(guest);

    });

    nightMinus.click(function () {
        night--;
        if (night < 0) {
            night = 0;
        }

        print();

        console.log(night);
    });

    nightPlus.click(function () {
        night++;

        print();

        console.log(night);

        

    });

    function print() {
        $('.guest-number').text(guest + ' ');
        $('.night-number').text(night + ' ');
        $('.total-price').text(getTotalPrice() + ' ');
        
        if (night >= 10) {

            titleNumNight.css({'width':"265px"});
        } else {
            titleNumNight.css({'width':"242px"});
        }

        if (guest >= 10) {

            titleNumGuest.css({'width':"270px"});
        } else {
            titleNumGuest.css({'width':"242px"});
        }

        
        if (totalPrice >= 100 && totalPrice < 1000) {

            titleTotalPrice.css({'width':'270px'});
            spanPerNight.css({'margin-right':'12px'});
        }
        if (totalPrice >= 1000 && totalPrice < 10000) {

            titleTotalPrice.css({'width':'300px'});
            spanPerNight.css({'margin-right':'13px'});
        }
        if (totalPrice >= 10000 && totalPrice < 100000) {

            titleTotalPrice.css({'width':'330px'});
            spanPerNight.css({'margin-right':'16px'});
        }
        if (totalPrice >= 100000) {

            titleTotalPrice.css({'width':'360px'});
            spanPerNight.css({'margin-right':'16px'});
        }

    }

    function getTotalPrice() {
        totalPrice = 0;
        totalPrice = (night * 82) * guest;
        return totalPrice;
    };
    
  
});