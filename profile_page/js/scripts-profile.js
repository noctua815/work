$(document).ready(function() {
	function setHeight() { //Нахождение высоты главной области page
		$('.page').css({
			minHeight: $(window).height() - $('.header_search').height() - $('.layout_footer').height() - 50 + 'px'
		});
	}
	setHeight();
	$(window).resize(setHeight); //Обновление выооты page 
	
	$('.select_box').click(function() {
		var selWidth=$(this).width();
		$(this).children().css("width", selWidth +"px");
	});

	$('.user-panel_head').toggle( //Раскрытие подменю пользователя
		function() {
			$('.user-panel_menu .menu').slideToggle();
			$('.btn_drop').addClass('open');
			$('.user-panel_head').css({
				backgroundColor: '#565656',
				borderBottomColor: '#606060'
			});
		},
		function() {
			$('.user-panel_menu .menu').slideToggle();
			$('.btn_drop').removeClass('open');
			$('.user-panel_head').css({
				backgroundColor: '#616161',
				borderBottomColor: '#565656'
			});
		}
		);
	$('.search_btn').click(function() { //Открытие расширенного меню
		$.when($('.ext-search').show('slow')).then(function() {
			var searchHeight = $(this).outerHeight();
			console.log("height"+searchHeight);
			$('.banner').css({transform: "translateY(-" + searchHeight + "px)"});
		});
	});

	$('.close-search').click(function() {
		$('.ext-search').hide('slow');
		$('.banner').css({transform: "translateY(0)"});
	});

	$('.message-section span').click(function() { //Закрытие окон сообщений
		$(this).parents('.message-section').slideUp("normal",
			function() {$(this).remove()});
		
	});
	
	$('.tab_item').click(function() { //Клик по табам
		var tab_id=$(this).attr('id');
		tabClick(tab_id);
	});

	function tabClick(tab_id) { //Функция переключения табов
		if (tab_id != $('.tabs .tab_select').attr('id')) {
			$('.tab_item').removeClass('tab_select');
			$('#'+tab_id).addClass('tab_select');
			$('.info_form').removeClass('form_select');
			$('#form_'+tab_id).addClass('form_select');
		}
	}
	
	$('.add-input').click(function() { //Добавление форм ввода
		var newInput = $(this).prev('.simple_input').attr('class');
		newInput = newInput.replace('simple_input ','');
		var i = $("."+newInput).size();
		$('<input class="simple_input '+newInput+'" type="text" name="'+newInput+i+'"  placeholder="Добавить еще"><div class="del-input" title="Удалить"></div>').fadeIn().appendTo("#"+newInput+"s");
		i++;
	});
	
	$('.del-input').live("click", function() { //Удаление форм ввода
		$(this).prev('.simple_input').remove();
		$(this).remove();
	});

});