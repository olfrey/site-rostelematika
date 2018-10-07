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
		slidesToShow: 4
	})

	$('.reviews__list').slick({
		slidesToShow: 4
	})
});
