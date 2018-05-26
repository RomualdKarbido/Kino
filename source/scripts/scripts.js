$(document).ready(function() {
	$('.top-menu__menu-btn').click(function(){
		$('.top-menu__list').toggleClass('active');
		$('.body').toggleClass('menu');
	});

	
	//картинка для партнерского блока

	function pb (){
		if ($('.partners-block__img').height() <= 430) {
			$('.partners-block__img').addClass('active');
		}		
		
		var imgSize = ($('.partners-block__img').width());
	

		if ($(window).width() >= imgSize) {
			$('.partners-block__img').removeClass('active');
		}	
		else {
			var imgMargin = (imgSize - $(window).width()) / 2; 
			$('.partners-block__img').css({'left': - imgMargin});
		}	
	};
	pb();
	$(window).resize(function() {
		pb();
		
	});

	
	
	
	
	



	
});
