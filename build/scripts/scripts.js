$(document).ready(function() {
	//вызов прелоадера
	$('.preloader__on').click(function() {
		$('.preloader__wrap').addClass('active');
	});
	$('.preloader__wrap').click(function () {
		$(this).addClass('closed');
		setTimeout(function() {
			$('.preloader__wrap').removeClass('closed active');
		}, 500);


		// $(this).removeClass('closed');
		// $(this).removeClass('active');

		// $(this).delay(10000).removeClass('closed');
		// $(this).delay(10000).removeClass('active');
		 // $(this).delay(5000).removeClass('closed');
		// $(this).delay(8000).removeClass('active');
		
		
	});


	//селект
	$('.select').click(function(){
		
		$(this).toggleClass('active');
		
		
		$('.select__item').click(function(){	
			$(this).siblings().removeClass('active');
			$(this).addClass('active');	

			var selectText = $(this).text();
			
			$(this).closest('.select').children('.select__input').val(selectText);
		});
	});


	//Мультиселект
	
	function bindSelectedItemsToInput() {
		var selectedItemsAsString = "";
		var selectedItems = $('.m-select__item.active');
		var selectedItemsCount = selectedItems.length;

		selectedItems.each(function(index) {
			selectedItemsAsString += $(this).text();
			if(index != selectedItemsCount - 1)
				selectedItemsAsString += ', ';
		});
		$('.m-select__input').val(selectedItemsAsString);
	}

	bindSelectedItemsToInput();

	$('.m-select__input').click(function() {
		var $mlDropbox = $(this).siblings('.m-select__dropbox');
		var $mlContainer = $(this).closest('.m-select');
		if(!$mlDropbox.hasClass("active"))
		{
			$('	.m-select').removeClass("active");
		}

		$mlDropbox.toggleClass('active');
		$mlContainer.toggleClass('active');
	});

	$( '.m-select__item').click(function() {
		$(this).toggleClass('active');
		bindSelectedItemsToInput();
	});
	

	//бутерброд

	$('.sandwich__table_head').click(function() {
		// $('.sandwich__item').removeClass('active');
		$(this).closest('.sandwich__item').toggleClass('active');
	});
	


	$('.my-product__title').click(function() {
		$(this).closest('.my-product').toggleClass('active');
	});


	// календарь
	$( function() {
		$( "#datepicker" ).datepicker({
			showOtherMonths: true,
			selectOtherMonths: true,
			range: "period",
			onSelect: function(dateText, inst, exstRange) {
				$("#datepicker").val(exstRange.startDateText + "-" + exstRange.endDateText);
			}
		});
	});
	
});

	












