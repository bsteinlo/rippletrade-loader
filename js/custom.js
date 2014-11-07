$(".initial").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
	$(this).hide();	
	$('.loading').show();
});

setTimeout(function() {
    $('.loading').hide();
    $('.loaded').show();     
}, 5000);


$(".loaded").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
	$('.login_top').fadeIn(500);  
	$('.login_placeholder').fadeIn(1000);   
	$('.footer_placeholder').fadeIn(1500);  
});