function classOnResize(elem, size, newClass) {
	if ($(window).width() <= size) {
		$(elem).addClass(newClass);
	} else {
		$(elem).removeClass(newClass);
	}
}

$(window).on('resize', function() {
	classOnResize('.pin-carousel-item', 900, 'text-center');
	classOnResize('.pins-carousel-indicators', 767, 'visually-hidden');	
	classOnResize('.dropdown-menu', 991, 'glass rounded-2');
	classOnResize('#glass-piece-6', 800, 'd-none');
	classOnResize('#glass-piece-4', 380, 'd-none');
	classOnResize('#glass-piece-1', 325, 'd-none');
	classOnResize('#glass-piece-2', 195, 'd-none');
	classOnResize('#glass-piece-3', 195, 'd-none');
	classOnResize('#glass-piece-5', 175, 'd-none');
});

$(document).ready(function() {
	classOnResize('.pin-carousel-item', 900, 'text-center');
	classOnResize('.pins-carousel-indicators', 767, 'visually-hidden');
	classOnResize('.dropdown-menu', 991, 'glass rounded-2');
	classOnResize('#glass-piece-6', 800, 'd-none');
	classOnResize('#glass-piece-4', 380, 'd-none');
	classOnResize('#glass-piece-1', 325, 'd-none');
	classOnResize('#glass-piece-2', 195, 'd-none');
	classOnResize('#glass-piece-3', 195, 'd-none');
	classOnResize('#glass-piece-5', 175, 'd-none');
});