AOS.init();

$('.nav-link').click(function(e){
	e.preventDefault();
	const anchor = $(this).attr('href');
	$('html, body').animate({scrollTop: $(anchor).offset().top}, 800)
})
