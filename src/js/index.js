const $ = require('jquery');

const Handlebars = require('handlebars');

require('./tracking'); // require analytics

// DOM ready
$(function(){

  // mobile menu toggle
  $('.mobile-menu').on('click', function() {
    $(this).toggleClass('menu-close');
    $('.nav-body').toggleClass('open');
  });

  //check scroll pos of menu bar and stick it
  $(window).scroll(function() {
    const $navBar = $('#nav-bar') // grab nav-bar
    , $spacer = $('.nav-bar__spacer') // grab spacer
    , heroht = $('#top').height() // calc height of hero
    , wScroll = $(this).scrollTop(); // calc scoll distance

    // if ($navbar.hasClass('isFixed')) {
    //   $navBar.removeClass('isFixed');
    // }

    if (heroht <= wScroll) {
      $navBar.addClass('isFixed');
      $spacer.show();
    } else {
      $navBar.removeClass('isFixed');
      $spacer.hide();
    }
    
  })

  const getYear = () => {
    const date = new Date()
    , year = date.getFullYear();

    return year;
  }

  $('#year').text(getYear());

}());
