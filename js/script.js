$(window).on('resize', function() {
	if ($(window).width() <= 760) {
		$('#my-footer').addClass('fixed-bottom');
	} else {$('#my-footer').removeClass('fixed-bottom');}
	
});

$(document).ready(function() {
	if ($(window).width() <= 760) {
		$('#my-footer').addClass('fixed-bottom');
	} else {$('#my-footer').removeClass('fixed-bottom');}
});