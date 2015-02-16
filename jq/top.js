$(document).ready(function(){
	$('.top').click(function(){
		$('html,body').animate({
			scrollTop: 0
		},400);
	});
	$(window).scroll(function(){
		if( $(this).scrollTop() > 400 ){
			$('.top').fadeIn('fast');
			$('.nav-stly').addClass('nav-stly-fixed');
			$('.nav-stly').animate({'top':'0px'},500);
		} else {
			$('.top').stop().fadeOut('fast');
			$('.nav-stly').animate({'top':'-120px'},500,function(){
				$('.nav-stly').removeClass('nav-stly-fixed');
			});
			
		}
	});
});