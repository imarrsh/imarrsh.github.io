const $ = require('jquery');
const projects = require("./data-projects");
// require analytics
require('./tracking');

// DOM ready
$(function(){

  const $workThumbs = $('.work-thumbs');

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

  //check scroll pos of menu bar and stick it
  $(window).scroll(function() {
    const $navBar = $('#nav-bar') // grab nav-bar
    , $spacer = $('.nav-bar__spacer') // grab spacer
    , heroht = $('#top').height() // calc height of hero
    , wScroll = $(this).scrollTop(); // calc scoll distance

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
  
  // simple template data & literal for work section:
  projects.forEach(project => {
    const template = `
      <article class="sample">
        <div class="sample-image" 
          style="background-image: url('${project.imageUrl}');" 
          title="${project.title}">
        </div>
        <div class="sample-info">
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          <div class="preview-links">
            <a href="${project.liveLink}">
              <svg class="golook" viewBox="168 3756 59.672 32.102">
                <path fill="#fff" d="M2209,16.051C2209.134,15.89,2222.582,0,2238.836,0c16.291,0,29.7,15.89,29.836,16.051-.134.161-13.582,16.051-29.836,16.051C2222.544,32.1,2209.134,16.211,2209,16.051Zm5.7.027c.107.116,10.907,11.638,24.111,11.638,13.16,0,24-11.522,24.112-11.638-.108-.116-10.907-11.638-24.112-11.638C2225.651,4.44,2214.808,15.961,2214.7,16.077Zm14.656.213a9.689,9.689,0,0,1,1.729-5.539c2.146,1.96,3.962,3.085,4.984,3.085a.853.853,0,0,0,.564-.178c.769-.646.02-2.966-1.956-6.055a9.628,9.628,0,0,1,4.434-1.067,9.754,9.754,0,1,1-9.754,9.754Z" transform="translate(-2041 3756)"/>
              </svg>
              <span>View Live</span>
            </a>
            <a href="${project.codeLink}">
              <svg class="gocode" viewBox="347.5 3755.5 68.262 32.973">
                <path fill="#fff" d="M12.043-45.4l11.412,5.7a1.157,1.157,0,0,1,.7.9,3.435,3.435,0,0,1-.507,1.756,5.767,5.767,0,0,1-.556.927,1.723,1.723,0,0,1-.517.478.868.868,0,0,1-.517.107,1.555,1.555,0,0,1-.556-.185L6.288-43.569a1.547,1.547,0,0,1-.683-.614A2.6,2.6,0,0,1,5.391-45.4a2.6,2.6,0,0,1,.215-1.219,1.547,1.547,0,0,1,.683-.614L21.5-55.078a1.555,1.555,0,0,1,.556-.185.868.868,0,0,1,.517.107,1.723,1.723,0,0,1,.517.478,5.768,5.768,0,0,1,.556.927A3.435,3.435,0,0,1,24.157-52a1.157,1.157,0,0,1-.7.9Zm35.7-12.446L34.827-28.821a.969.969,0,0,1-.566.488,2.559,2.559,0,0,1-.917.156,4.42,4.42,0,0,1-1.17-.166,3.713,3.713,0,0,1-1.053-.458,1.964,1.964,0,0,1-.683-.732,1.015,1.015,0,0,1,.02-.927L43.372-59.487a1.006,1.006,0,0,1,.575-.5,2.556,2.556,0,0,1,.946-.166,4.314,4.314,0,0,1,1.161.166,4.04,4.04,0,0,1,1.063.458,1.928,1.928,0,0,1,.654.732A1.08,1.08,0,0,1,47.741-57.849ZM66-45.4,54.589-51.1a1.157,1.157,0,0,1-.7-.9,3.435,3.435,0,0,1,.507-1.756,5.768,5.768,0,0,1,.556-.927,1.723,1.723,0,0,1,.517-.478.868.868,0,0,1,.517-.107,1.555,1.555,0,0,1,.556.185l15.216,7.842a1.547,1.547,0,0,1,.683.614,2.6,2.6,0,0,1,.215,1.219,2.6,2.6,0,0,1-.215,1.219,1.547,1.547,0,0,1-.683.614L56.539-35.727a1.555,1.555,0,0,1-.556.185.868.868,0,0,1-.517-.107,1.723,1.723,0,0,1-.517-.478,5.768,5.768,0,0,1-.556-.927,3.435,3.435,0,0,1-.507-1.756,1.157,1.157,0,0,1,.7-.9Z" transform="translate(342.609 3816.15)"/>
              </svg>
              <span>View Code</span>
            </a>
          </div>
        </div>
      </article>`;

    $workThumbs.append(template);
  });
  

}());
