// Import png
import  './images/grid.png';
import  './images/arrowUp.png';
import  './images/arrowDown.png';
import  './images/facebook.png';
import  './images/twitter.png';
import './images/techno.png';
// Init scss
import './scss/index.scss';
// Load Javascript
import app from './script/app.js';

$(document).ready(function() {
    app.initSmoothScrolling()
    $(window).scroll(function() {
        app.toggleNavbarTransparent();
    });
    app.toggleNavbarTransparent()
    $('.date').text(new Date().getFullYear())

    // Init tab system
    $('.tabs a').click(function(event) {
        event.preventDefault()
        app.goTab($(this))
    })
    
    var hash = window.location.hash;
    var a = $('a[href="'+ hash +'"]')
    if (a !== null && !a.hasClass("active")) {
        app.goTab(a)
    }
});

