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


    const guestPlus = document.querySelector('.guest__plus');
    const guestMinus = document.querySelector('.guest__minus');
    const nightPlus = document.querySelector('.night__plus');
    const nightMinus = document.querySelector('.night__minus');
    let guest = 1;
    let night = 1;
    let totalPrice = 0;
    let titleNumNight = document.querySelector('.title_night-number');
    let titleNumGuest = document.querySelector('.title_guest-number');
    let titleTotalPrice = document.querySelector('.title_total-price');
    let spanPerNight = document.querySelector('.per-night');
    
    print();

    guestMinus.addEventListener('click', () => {
        guest--;
        if(guest < 0) {
            guest = 0;
        }
        
        print();
    });

    guestPlus.addEventListener('click', () => {
        guest++;
        print();
        
    });

    nightMinus.addEventListener('click', () => {
        night--;
        if (night < 0) {
            night = 0;
        }

        print();
    });

    nightPlus.addEventListener('click', () => {
        night++;
        
        print();

    });

    function print() {
        if(night >= 10){
            
            titleNumNight.style.width='265px';
        }
        else{
            titleNumNight.style.width = '242px';
        }

        if (guest >= 10) {

            titleNumGuest.style.width = '270px';
        } else {
            titleNumGuest.style.width = '242px';
        }

        if (totalPrice >= 1000) {

            titleTotalPrice.style.width = '300px';
            //spanPerNight.style.marginright = '5px';
        }
        else {
            titleTotalPrice.style.width = '270px';
            //spanPerNight.style.marginright = '35px';
        }


        $('.guest-number').text(guest + ' ');
        $('.night-number').text(night + ' ');
        $('.total-price').text(getTotalPrice() + ' ');
    }
    
    function getTotalPrice () {
        totalPrice = 0;
        totalPrice = (night * 20)*guest;
        return totalPrice;
    };
  
});