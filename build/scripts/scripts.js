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

	//прилипание верхнего меню

	$(window).scroll(function() { 
		var topMenu = window.pageYOffset;
		// console.log(topMenu);
		if (topMenu >= 155 && $(window).width()  > 1025) {
			$('.top-menu').addClass('top');
			$('.header__black').addClass('top');
		}
		else {
			$('.top-menu').removeClass('top');
			$('.header__black').removeClass('top');
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
	$(window).resize(function() { 
		pb();
	});
	pb();

	
	//фильтрация букв в коллециях

	$('.filter-az__item').click(function(){
		var LetterID = $(this).html();
		$(".filter-az__list, .filter-az__list-big, .filter-az__message").empty();
		$('.filter-az__list-big').addClass('active');
		$('.filter-az__list-big').html(LetterID);
		$(function(){
			$.getJSON('../scripts/list.json', function(data) {
				var filteredItems = data.filter(function(item) {
					return item.name.toUpperCase().indexOf(LetterID.toUpperCase()) == 0;
				});
				
				for(var i = 0; i < filteredItems.length; i++)
				{
					if (filteredItems[i].time != undefined) {
						$('.filter-az__list').append('<li>' + filteredItems[i].name + '<span>' + filteredItems[i].time + ' год</span>' + '</li>');
					}
					else {
						$('.filter-az__list').append('<li>' + filteredItems[i].name + '</li>');

					}
				}
			});
		});
		if ($(window).width()  < 768) {
			var destination = $('.content_letter').offset().top;
			$('html, body').animate({ scrollTop: destination }, 1100);
		}
	});


	//поиск по фильмам
	function search(){
		var SearchAB = $('.filter-az__input').val();
		$(".filter-az__list, .filter-az__list-big, .filter-az__message").empty();
		$('.filter-az__list-big').removeClass('active');

		if (SearchAB.length > 2) {
			$(function(){
				$.getJSON('../scripts/list.json', function(data) {
					var filteredItems = data.filter(function(item) {
						return item.name.toUpperCase().indexOf(SearchAB.toUpperCase())   >= 0; 
					});
					for(var i = 0; i < filteredItems.length; i++) {
						$('.filter-az__list').append('<li><span class="filter-az__num">' + [i+1] + ' -  </span>'  + filteredItems[i].name + '</li>');
					}
					if (filteredItems.length == 0) {
						$('.filter-az__message').text('Ничего не найдено');
					}
				});
			});
			if ($(window).width()  < 768) {
				var destination = $('.content_letter').offset().top;
				$('html, body').animate({ scrollTop: destination }, 1100);
			}

		}
		else {
			$('.filter-az__message').text('Введите больше трех симоволов');
		}

	};


	$('.filter-az__search').click(function(){
		search();
	});
	
	$(".filter-az__input").keyup(function(event){
	    if(event.keyCode == 13){
	        search();
	    }
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

	//запрет ввода в поле слекта
	$('.k-select .k-select__input').keydown(function(e){
		console.log(e.key);
		e.preventDefault()
	});




	
});