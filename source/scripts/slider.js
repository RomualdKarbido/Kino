// слайдер
$(function(){
	//слайдер в heder
	$(".header__slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		autoplay: false,
		variableWidth: true,
		infinity: true
			
	});
	//слайдер в стр история
	$(".history-slider").slick({
		dots: true,
		infinite: true,
		arrows: false,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true
			
	});
	

})