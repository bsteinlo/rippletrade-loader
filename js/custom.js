$(".initial").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
	$(this).hide();	
	$('.loading').show();
});

setTimeout(function() {
     $('.loading').hide();
     $('.loaded').show();
     $('.login_top').fadeIn(1000);  
	 $('.login_placeholder').fadeIn(1500);   
	 $('.footer_placeholder').fadeIn(2000);  
	 $('.site-wrapper').css("background", "#fff");  
}, 5000);