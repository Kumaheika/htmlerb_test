$(document).ready(function(){
	$('.top').click(function(){
		$('html,body').animate({
			scrollTop: 0
		},400);
	});
<<<<<<< HEAD
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
=======
	//手機模式 收放Menu
	$('.nav-icon').click(function(){
		$('ul.navbar').toggleClass('nav-icon-show');
>>>>>>> da30fecd61c4615bec7263ffbff269c853fa87e1
	});
	
});