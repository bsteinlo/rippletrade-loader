$(".initial").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
	$(this).hide();	
	$('.loading').show();
});

setTimeout(function() {
    $('.loading').hide();
    $('.loaded').show();     
}, 3000);


$(".loaded").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
	$('.bg').removeClass('blue'); 
	$('.login_top').fadeIn(1000);  
	$('.login_placeholder').fadeIn(1500);   
	$('.footer_placeholder').fadeIn(2000);  
	$('.site-wrapper').css("background", "#fff");  
});