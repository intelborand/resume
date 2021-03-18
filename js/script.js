'use strict'

const btnContact = document.querySelector('.btn'),
      expTitle = document.querySelector('.expierense__header__title'),
      aboutMe = document.querySelector('.about-me__subtitle'),
      btnLink = document.querySelectorAll('.button_link'),
      containerLink = document.querySelector('.container_link');


jQuery(document).ready(function() {
    var btn = $('#buttonUp'); 

    $(window).scroll(function() {     
          if ($(window).scrollTop() > 300) {
             btn.addClass('show');
           } else {
             btn.removeClass('show');
           }
    });
    
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });
});

