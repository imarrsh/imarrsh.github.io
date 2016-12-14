const $ = require('jquery');
require('./tracking'); // require analytics

// DOM ready
$(function(){
  const hello = () => 'Coming Soon!!';
  console.log(hello());
}())