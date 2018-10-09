$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');

	$('.nav__list li ul').each(function(index, el) {
		var li = $(this).parents('li');
		li.addClass('has-subnav');
	});

	function valueElementForm(nameElement, nameBlock) {
		var newNameElement = '.' + nameElement;
			element = $(newNameElement);
		element.each(function(index, el) {
			var elementInput = $(this).find($(nameBlock)),
				elementLabel = $(this).find($('label')),
				elementValue = index + 1;
			elementInput.attr('id', nameElement + '-' + elementValue);
			elementLabel.attr('for', nameElement + '-' + elementValue);
		});
		
	}
	valueElementForm('search-block', 'input');
	valueElementForm('input', 'input');
	valueElementForm('textarea', 'textarea');
	valueElementForm('select', 'select');
	

	$('select[data-placeholder]').each(function(index, el) {
		$(this).find('option:nth-of-type(1)').html('');
	});

	$('select').styler();

	var calc = {
		data: $('.calc__data'),
		btn: $('.calc__btn'),
		currency: ' руб.',
		type: $('[name = calc-val-type]'),
		amount: $('[name = calc-val-amount]'),
		mileage: $('[name = calc-val-mileage]'),
		fuel: $('[name = calc-val-fuel]'),
		month: $('#calc-month'),
		year: $('#calc-year'),
		equip: $('#calc-equipment'),
		price: $('#calc-full')
	}

	calc.btn.click(function (event){
		var type = calc.type.val()
		amount = calc.amount.val()
		mileage = calc.mileage.val()
		fuel = calc.fuel.val();
		
		calc.month.html(type + calc.currency);
		calc.year.html(amount + calc.currency);
		calc.equip.html(mileage + calc.currency);
		calc.price.html(fuel + calc.currency);
		calc.data.slideDown(300);
	});

	$('.calc .input__wrap').bind("change keyup input click", function() {
		if (this.value.match(/[^0-9]/g)) {
		this.value = this.value.replace(/[^0-9]/g, '');
		}
	});

	$('.portfolio__list').slick({
		fade: true
	})

	$('.clients__list').slick({
		slidesToShow: 4,
		responsive: [{
			breakpoint: 752,
			settings: {
				slidesToShow: 1
			}
		}]
	})

	$('.reviews__list').slick({
		slidesToShow: 4,
		responsive: [{
			breakpoint: 1184,
			settings: {
				slidesToShow: 3
			}}, {
			breakpoint: 992 - 15,
			settings: {
				slidesToShow: 2
			}}, {
			breakpoint: 752,
			settings: {
				slidesToShow: 1
			}
		}]
	})

	$('.map').tabs();


	var kpInput = $('#kp-input'),
			kpDesc = $('#kp-desc');

	$('a[data-src]').click(function(event) {
		var dataSrc = $(this).attr('data-src');
		if (dataSrc == '#popup-kp') {
			var item = $(this).parents('.kp-item'),
					title = item.find('.kp-title').text();
			kpDesc.html(title);
			kpInput.val(title);
			console.log(kpInput.val());
		}
	});

	var hum = $('.hum'),
			humToggle = 'hum_toggle',
			nav = $('.nav__wrap');

	hum.click(function(event) {
		hum.toggleClass(humToggle);
		nav.slideToggle(300);
	});

	$('.map__nav-list li a').click(function(event) {
		if ($(window).width() < 752) {
			var _href = $(this).attr("href");
	    $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 500);
	    return false;
		}
	});

	$('.nav__list li.has-subnav > a').click(function(event) {
		var windowWidth = $(window).width();
		if (windowWidth < 992) {
			event.preventDefault();
			var ul = $(this).next('ul');
			ul.slideToggle(300);
		}
	});
});
