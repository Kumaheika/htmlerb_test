$(document).ready(function(){
	$('.top').click(function(){
		$('html,body').animate({
			scrollTop: 0
		},400);
	});
	$(window).scroll(function(){
		if( $(this).scrollTop() > 400 ){
			$('.top').fadeIn('fast');
			$('.nav-stly').addClass('nav-stly-fixed').slideToggle();
		} else {
			$('.top').stop(true).fadeOut('fast');
			$('.nav-stly').slideUp(300,function(){
				$(this).removeClass('nav-stly-fixed').addClass('nav-stly');
			});
		}
	});
});