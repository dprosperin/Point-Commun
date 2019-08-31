$(function() {
	var tab = function(target) {
		var div = target.parent().parent().parent()
    	var li =  target.parent()

    	if (li.hasClass("active")) {
      		return false;
    	}
    
    	div.find(".tabs .active").removeClass("active")
    	li.addClass("active")
    	div.find(".tab-content.active").removeClass("active")
    	div.find(target.attr("href")).addClass("active") 
	}    

	// Init tab system
    $('.tabs a').click(function(event) {
        event.preventDefault()
        tab($(this))
    }) 

    var hash = window.location.hash;
    var a = $('a[href="'+ hash +'"]')
    if (a !== null && !a.hasClass("active")) {
        tab(a)
    }
});