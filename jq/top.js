$(document).ready(function(){
	$('.top').click(function(){
		$('html,body').animate({
			scrollTop: 0
		},400);
	});
	//手機模式 收放Menu
	$('.nav-icon').click(function(){
		$('ul.navbar').toggleClass('nav-icon-show');
	});
	
});