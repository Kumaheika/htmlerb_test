$(document).ready(function(){
	$('.top').click(function(){
		$('html,body').animate({
			scrollTop: 0
		},400);
	});
	$(window).scroll(function(){
		if( $(this).scrollTop() > 400 ){
			$('.top').stop(true).fadeIn('fast');
		} else {
			$('.top').stop(true).fadeOut('fast');
		}
	});
	//手機模式 收放Menu
	$('.nav-icon').click(function(){
		$('ul.navbar').toggleClass('nav-icon-show');
	});
});