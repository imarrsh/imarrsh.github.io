const $ = require('jquery');
require('./tracking'); // require analytics

// DOM ready
$(function(){

  // mobile menu toggle
  $('.mobile-menu').on('click', function() {
    $(this).toggleClass('menu-close'); // animate to an 'x'
    $('.nav-body').toggleClass('open');
  });

  // link was clicked - dismiss menu
  $('.nav-links a').on('click', function(e){
    const self = $(this);
    const $href = $(e.target).attr('href');
    // console.log($href.indexOf('#'));

    // check the href for id anchor - '#' 
    if ($href.indexOf('#') !== -1 ) {
      e.preventDefault();

      if ($('.nav-body').hasClass('open')){
        $('.nav-body').removeClass('open');
      }
      // scroll to section
      $('html, body').animate({
        scrollTop: $(self.attr('href')).offset().top - 56
      }, 1000);
    }

  });

  // function toolbeltWidth(){

  // }

  // const tools = document.querySelectorAll('.tool');
  // const toolsWidth = Array.prototype.map.call(tools, el => {
  //         return el.offsetWidth + 16;
  //       }).reduce((total, x) => total + x, 0)

  // console.log(tools, toolsWidth);

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
