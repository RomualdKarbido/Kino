$(document).ready(function() {
	$('.top-menu__menu-btn').click(function(){
		$('.top-menu__list').toggleClass('active');
		$('.body').toggleClass('menu');
	});
	
	$( ".menu-item" ).each(function( index ) {
		if($(this).children('ul').length > 0) {
			$(this).children('a').addClass('after');
		}
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

	
	//фильтрация букв в коллециях

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
		var destination = $('.content_letter').offset().top;
		$('html, body').animate({ scrollTop: destination }, 1100);
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


	// селект
	function initCustomSelectControls() {
		$('.k-select__item.active').each(function() {
			var $container = $(this).closest(".k-select");
			$container.find('.k-select__input').val($(this).text());
		});

		$('.k-select .mdi-chevron-down, .k-select__input').click(function() {
			var $container = $(this).closest('.k-select');


			if(!$container.hasClass("active"))
			{
				$('.k-select.active, .k-select__dropbox.active').removeClass('active');
			}

			$container.find('.k-select__dropbox').toggleClass('active');
			$container.toggleClass('active');
		});
		
		$('.k-select__item').click(function() {
			var $container = $(this).closest(".k-select");
			if ($(this).hasClass('active')) {
				$container.find('.k-select__item').removeClass('active');
			}
			else {
				$container.find('.k-select__item').removeClass('active');
				$(this).addClass('active');
			}
			
			var secletedText = $container.find('.k-select__item.active').text();
			$container.find('.k-select__input').val(secletedText);

			

			//выводим значение выбраного элемента в скрытый блок
			var selectID = $(this).closest('.k-select').attr('id');
			if (selectID == 's1') {
				$('#hidden-1').val(secletedText);
			}
			else {
				$('#hidden-2').val(secletedText);
			}
			


			$container.find('.k-select__dropbox').removeClass('active');
			$container.removeClass('active');

			
			
		});
	}
	

	initCustomSelectControls();


	//выбор подслелекта
	$('#s1').click(function() {
		$('#s1 .k-select__item').each(function(i,elem) {
			if ($(this).hasClass('active')) {

				$('.form-block__services .k-select').each(function(n,elem) {

					if (n == i) {
						$(this).addClass('visible');
					}
					else {
						$(this).removeClass('visible');
					}
				});
			}
		});
	});




	
});