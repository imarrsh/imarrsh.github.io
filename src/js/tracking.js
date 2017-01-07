// google analytics module

const analytics = require('ga-browser')();

const location = window.location.pathname
, pageTitle = document.title;

analytics('create', 'UA-88987609-1', 'auto');
analytics('send', 'pageview', {
        'page': location,
        'title': pageTitle
});

/**
* Function that tracks a click on an outbound link in Analytics.
* This function has been modified to be an event handler that takes the 
* event object and pulls the URL string from the href attribute 
* of the currentTarget and uses that URL string as the 
* event label. Setting the transport method to 'beacon' lets the hit be sent
* using 'navigator.sendBeacon' in browser that support it.
*/
const trackOutboundLink = function(e) {
  e.preventDefault();
  const url = e.currentTarget.href;
  // send tracking data
  ga('send', 'event', 'outbound', 'click', url, {
    'transport': 'beacon',
    'hitCallback': function(){window.location = url;}
  });
}

// collect outbound links if ga successfully loads
const collectOutboundLinks = function(){   
  const outboundLinks = document.querySelectorAll('a[href^="http"]');
  outboundLinks.forEach(link => link.addEventListener('click', trackOutboundLink) );
}

// on load, check for ga - if 
window.addEventListener('load', () => {
  if (window.ga && ga.create) {
    collectOutboundLinks();
  }
})

