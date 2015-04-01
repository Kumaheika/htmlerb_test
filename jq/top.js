$(document).ready(function(){

	//取消按鈕點按功能
	$('.unlink').click(function(e){
		e.preventDefault();
	});

	//按鈕滑動功能
	//Top
	$('.top').click(function(){
		goTag('html,body');
	});
	//關於我
	$(".btn-aboutMe").click(function () {
		goTag('.aboutMe');
    });
    //設計作品
    $(".btn-linkpage").click(function () {
    	goTag('.linkpage');
    });
    //聯絡我
	$(".btn-contactMe").click(function () {
		goTag('.contactMe');
    });

    //卷軸超過N Top fadeIn()
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

	//平滑位移function
	function goTag($classTag){
		var position01 = $($classTag).offset();
		var y01 = position01.top -60;
		$("html,body").animate({
            scrollTop: y01
        }, 400);
        $('ul.navbar').toggleClass('nav-icon-show');
	};
});