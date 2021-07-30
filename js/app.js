$(function (){
    'use strict';

    $('.banner-slider-container').slick({
        prevArrow:'<i class="fas fa-chevron-left banner-arrow1 left "></i>',
        nextArrow:'<i class="fas fa-chevron-right banner-arrow1 right"></i>',
        autoplay:true,
        autoplaySpeed:500,
        fade:true,
        cssEase:'linear',
    });
    $(".featured-filter-container").filterizr();
    
  $('.latest-slider').slick({
    prevArrow:'<i class="fas fa-chevron-left latest-arrow left "></i>',
    nextArrow:'<i class="fas fa-chevron-right latest-arrow right"></i>',
    slidesToShow:4,
    autoplay:true,
    autoplaySpeed:500,
    });
 
  $('.testimonial-slider-container').slick({
    slidesToShow:2,
    prevArrow:'<i class="fas fa-chevron-left testimonial-arrow2 left "></i>',
    nextArrow:'<i class="fas fa-chevron-right testimonial-arrow2 right"></i>',
  })

})
