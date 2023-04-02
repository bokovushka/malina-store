import $ from 'jquery';
// import { createPopper } from '@popperjs/core';
import 'bootstrap';
import * as Sliders from "./modules/sliders.js";
import * as Pagination from "./modules/pagination.js";
import * as GalleryFancybox from "./modules/gallery-fancybox.js";

import Plyr from 'plyr';
const players = Plyr.setup('.js-player',
	{
		iconUrl: 'img/svg/plyr.svg',
	}
);

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
// 		fallbackPlacement: [], // строго в заданому напрямку, не дає можливості при скролі позиціонувати вверх, а не в низ
// 	});
// })