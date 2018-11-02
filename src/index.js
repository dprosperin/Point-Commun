import $  from 'jquery';
import 'flickity/css/flickity.css';
import './css/app.css';
import fabric from 'fabric/dist/fabric';
import Flickity from 'flickity';

const flky = new Flickity('.carousel', {
    pageDots: false,
    prevNextButtons: false,
    wrapAround: true,
    autoPlay: true,
    imagesLoaded: false, 
    percentPosition: false
})

var c = new fabric.Canvas(canvas,{
    selection: false, 
    height:	window.innerHeight, 
    width:window.innerWidth
   }),
  options = {
      distance: 10,
      width: c.width,
      height: c.height,
      param: {
        stroke: '#ebebeb',
        strokeWidth: 1,
        selectable: false
      }
   },
      gridLen = options.width / options.distance;

  for (var i = 0; i < gridLen; i++) {
    var distance   = i * options.distance,
        horizontal = new fabric.Line([ distance, 0, distance, options.width], options.param),
        vertical   = new fabric.Line([ 0, distance, options.width, distance], options.param);
    c.add(horizontal);
    c.add(vertical);
    if(i%5 === 0){
      horizontal.set({stroke: '#cccccc'});
      vertical.set({stroke: '#cccccc'});
    };
  };
$('.date').text(new Date().getFullYear())