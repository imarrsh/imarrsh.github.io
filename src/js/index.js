const $ = require('jquery');
require('./tracking'); // require analytics

// DOM ready
$(function(){

  const hello = () => 'Coming Soon!!';
  console.log(hello());

  // mobile menu toggle
  $('.mobile-menu').on('click', function(){
    $('.nav-body').slideToggle();
  });

}())