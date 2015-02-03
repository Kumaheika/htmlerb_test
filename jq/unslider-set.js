$(function() {
    $('.banner').unslider({
    	speed: 500,
    	delay: 3000,
    	complete: function() {},  //A function that gets called after every slide animation
    	keys: true, //Enable keyboard (left, right) arrow shortcuts
    	dots: true,
    	fluid: false  //Support responsive design. May break non-responsive designs
    });

    var unslider = $('.banner').unslider();
    var data = unslider.data('unslider');
    $('.unslider-arrow').click(function() {
        var fn = this.className.split(' ')[1];

        //  Either do unslider.data('unslider').next() or .prev() depending on the className
        unslider.data('unslider')[fn]();
    });
});