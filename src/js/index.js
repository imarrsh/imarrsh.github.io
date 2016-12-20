const $ = require('jquery');
require('./tracking'); // require analytics

// DOM ready
$(function(){

  // mobile menu toggle
  $('.mobile-menu').on('click', () => {
    $('.nav-body').slideToggle();
  });

  //check scroll pos of menu bar and stick it
  $(window).scroll(function() {
    const $navBar = $('#nav-bar') // grab nav-bar
    , heroht = $('#top').height() // calc height of hero
    , wScroll = $(this).scrollTop(); // calc scoll distance

    if (heroht <= wScroll) {
      $navBar.addClass('isFixed');
    } else {
      $navBar.removeClass('isFixed');
    }

    console.log(heroht, wScroll);
  })

}())