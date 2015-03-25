/*$(document).ready(function(){
	$('#top-bar').each(function(){
		var $window = $(window),
		    $header = $(this),
		    headerOffTop = $header.offset().top;
		$window.on('scroll',function(){
			if( $window.scrollTop() > headerOffTop ){
				$header.addClass('nav-stly-fixed');
			} else {
				$header.removeClass('nav-stly-fixed');
			}
		});
		$window.trigger('scroll');
	});
});*/
$(function () {

	$('.nav-stly').each(function () {
		var $window = $(window),
		    $header = $(this),

		    $headerClone = $header.contents().clone(),
		    $headerContainer = $('<div class="nav-stly-clone  gridStyle"></div>'),
		    $hold = $header.offset().top + $header.outerHeight()*3;

		$headerContainer.append($headerClone);
	    $headerContainer.appendTo('body');

	    $window.on('scroll', function(){
	    	if( $window.scrollTop() > $hold ){
	    		$headerContainer.addClass('visibles');
	    	} else {
	    		$headerContainer.removeClass('visibles');
	    	}
	    });
	    $window.trigger('scroll');
	});
});