// google analytics module

// original tracking code
// (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
// (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
// m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
// })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

// ga('create', 'UA-88987609-1', 'auto');
// ga('send', 'pageview');

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

   ga('send', 'event', 'outbound', 'click', url, {
     'transport': 'beacon',
     'hitCallback': function(){document.location = url;}
   });
}

// collect outbound links
const outboundLinks = document.querySelectorAll('a[href^="http"]');
// console.log(outboundLinks);
outboundLinks.forEach(link => link.addEventListener('click', trackOutboundLink) );
