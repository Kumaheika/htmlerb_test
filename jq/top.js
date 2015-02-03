$(document).ready(function(){
	$('.top').click(function(){
		$('html,body').animate({
			scrollTop: 0
		},400);
	});
	$(window).scroll(function(){
		if( $(this).scrollTop() > 400 ){
			$('.top').fadeIn('fast');
		} else {
			$('.top').stop().fadeOut('fast');
		}
	});
});