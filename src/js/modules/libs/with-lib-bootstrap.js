import $ from 'jquery';
// import { createPopper } from '@popperjs/core';
import 'bootstrap';

//? single-blog //tooltips
// $(function () {
// 	// новий шаблон
// 	var tooltipTemplate = ['<div class="tooltip tooltip-preview" role="tooltip">',
// 		'<div class="tooltip-inner ">',
// 		'</div>',
// 		'</div>'].join('');
// 	$('.btn-tooltip-preview').tooltip({
// 		trigger: "manual", //hover focus click manual
// 		html: true,
// 		placement: "bottom",
// 		template: tooltipTemplate,
// 		fallbackPlacement: [], // строго в заданому напрямку, не дає можливості при скролі позиціонувати в інші сторони
// 	});
// })

//? archive catalog //tooltip checkbox
$(function () {
	// новий шаблон
	var tooltipTemplate = ['<div class="tooltip tooltip-filter-item--type-picture" role="tooltip">',
		'<div class="tooltip-inner">',
		'</div>',
		'</div>'].join('');
	$('.filter-item--type-picture .checkbox-preview').tooltip({
		trigger: "manual", //hover focus click manual
		title: '<div class="filter-find p-4 bg-white"><div class="filter-find-info text-center mb-3">Найдено: <strong><span>187</span></strong> вариантов</div><a href="##" class="btn btn-outline-black-custom w-100">Показать</a></div>',
		html: true,
		placement: "right",
		container: ".filter-item--type-picture .checkbox-preview-wrap",
		template: tooltipTemplate,
		fallbackPlacement: [], // строго в заданому напрямку, не дає можливості при скролі позиціонувати в інші сторони
	});

	var tooltips = $('.filter-item--type-picture .checkbox-preview');
	$('.filter-item--type-picture .custom-control-label').click(function (e) {
		tooltips.tooltip('hide');
		if ($('.filter-item--type-picture .custom-checkbox').hasClass('checked')) {
			$(this).closest('.checkbox-preview').tooltip('show');
		}
		else {
			$(this).closest('.checkbox-preview').tooltip('hide');
		}
	});
});

//? tooltip color
$(function () {
	if (window.innerWidth > 991) {
		var tooltipColorTemplate = ['<div class="tooltip tooltip-help-color" role="tooltip">',
			'<div class="arrow"></div>',
			'<div class="tooltip-inner ">',
			'</div>',
			'</div>'].join('');
		$('.link-color').tooltip({
			trigger: "hover", //hover focus click manual
			html: true,
			placement: "top",
			template: tooltipColorTemplate,
			fallbackPlacement: [], // строго в заданому напрямку, не дає можливості при скролі позиціонувати в інші сторони
		});
	}
});

//? tooltip field--error
$(function () {
	var tooltipFieldError = ['<div class="tooltip tooltip-help-field-error" role="tooltip">',
		'<div class="arrow"></div>',
		'<div class="tooltip-inner ">',
		'</div>',
		'</div>'].join('');
	$('.field.field-error input').tooltip({
		trigger: "hover", //hover focus click manual
		html: true,
		placement: "top",
		template: tooltipFieldError,
		fallbackPlacement: [], // строго в заданому напрямку, не дає можливості при скролі позиціонувати в інші сторони
	});
});

//? tooltip field--error
$(function () {
	var tooltipFieldError = ['<div class="tooltip tooltip-help-info" role="tooltip">',
		'<div class="arrow"></div>',
		'<div class="tooltip-inner ">',
		'</div>',
		'</div>'].join('');
	$('.i-info').tooltip({
		trigger: "hover", //hover focus click manual
		html: true,
		placement: "top",
		template: tooltipFieldError,
		// fallbackPlacement: [], // строго в заданому напрямку, не дає можливості при скролі позиціонувати в інші сторони
	});
});