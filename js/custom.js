// initial animation ends, swap out for spinning logo
$(".initial").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
	$(this).hide();	
	$('.loading').show();
});

//this is arbitrary, im assuming it will be passed as a callback when client loads
setTimeout(function() {
    $('.loading').hide();
    $('.loaded').show();     
}, 5000);

//final animation ends, fade in placeholders
$(".loaded").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
	$('.login_top').fadeIn(500);  
	$('.login_placeholder').fadeIn(1000);   
	$('.footer_placeholder').fadeIn(1500);  
});