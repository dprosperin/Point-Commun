// Import png
import  './images/grid.png';
import  './images/arrowUp.png';
import  './images/arrowDown.png';
import  './images/facebook.png';
import  './images/twitter.png';
import './images/techno.png';
// Init css
import './css/index.scss';
// Load Javascript
import app from './script/app.js';

$(document).ready(function() {
    app.initSmoothScrolling()
    $(window).scroll(function() {
        app.toggleNavbarTransparent();
    });
    app.toggleNavbarTransparent()
    $('.date').text(new Date().getFullYear())
});

