// слайдер
$(function(){
	//слайдер для виджета - приятного аппетита
	$(".header__slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		autoplay: false,
		variableWidth: true,
		infinity: true
			
	});

})