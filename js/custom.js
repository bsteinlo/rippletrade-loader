$(".initial").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
	$(this).hide();	
	$('.loading').show();
});

setTimeout(function() {
     $('.loading').hide();
     $('.loaded').show();
}, 5000);