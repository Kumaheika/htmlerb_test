$(function(){
	$('.aboutMe-range').each(function(){
		var $this = $(this),
		    $windowsHeight = $(window).height() *0.8,
		    $scrollTop = $this.offset().top - $windowsHeight,
		    $txt = $this.find('.ab-txt');
		    $photo = $this.find('.ab-myphoto');
		//動畫sel預先定位
		$txt.addClass('ani-posi-Right');
		$photo.addClass('ani-posi-Left');

		//卷軸滑到位置時...
		$(window).scroll(function(){
			if( $(this).scrollTop() > $scrollTop ){
				$txt.addClass('ani-runIn-Right');
				$photo.addClass('ani-runIn-Left');
			}
		});
	});
});