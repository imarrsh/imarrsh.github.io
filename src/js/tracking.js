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