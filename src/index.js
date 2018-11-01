import $  from 'jquery';
import 'flickity/css/flickity.css';
import './css/app.css';
import Flickity from 'flickity';

const flky = new Flickity('.carousel', {
    pageDots: false,
    prevNextButtons: false,
    wrapAround: true,
    autoPlay: true,
    imagesLoaded: false, 
    percentPosition: false
})
