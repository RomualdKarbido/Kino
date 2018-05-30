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

	
	

	$('.filter-az__item').click(function(){
		var LetterID = $(this).html();
		$(".filter-az__list, .filter-az__list-big").empty();
		$('.filter-az__list-big').html(LetterID);
		$(function(){
		    $.getJSON('../scripts/list.json', function(data) {
		    	for(var i=0; i<data.length; i++){
		    		var valueField = data[i].name[0];
		    		if (valueField == LetterID) {
		    			$('.filter-az__list').append('<li>'  + data[i].name + '</li>');
		    		}
		    	}  
		    });
		});
		
	});
	
	

	$('.filter-az__switch').click(function(){
		$('.filter-az__switch').removeClass('active');
		$(this).addClass('active');
		if ($('#en').hasClass('active')) {
			$('.filter-az').removeClass('active');
			$('.filter-az_en').addClass('active');
		} 
		if ($('#rus').hasClass('active')) {
			$('.filter-az').removeClass('active');
			$('.filter-az_rus').addClass('active');
		}
		if ($('#digits').hasClass('active')) {
			$('.filter-az').removeClass('active');
			$('.filter-az_digits').addClass('active');
		}
	});
	
});
