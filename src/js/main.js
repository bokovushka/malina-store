// import * as functions from "./modules/functions.js";
// functions.isWebp();
import * as InputCounter from "./template-parts/_input-counter.js";
// import * as Inputmask from "./template-parts/_inputmask.js";
import * as MoreBlocks from "./template-parts/_more-blocks.js";
import * as Burger from "./template-parts/_burger.js";
import * as Menu from "./template-parts/_menu.js";
import * as AnimateScroll from "./template-parts/_animate-scroll.js";
import * as ShowMenu from "./template-parts/_show-menu.js";
// import * as SlickSlider from "./template-parts/_slick-slider.js";
import * as InputRange from "./template-parts/_input-range.js";
import * as CustomSelect from "./template-parts/_custom-select.js";
import * as CheckboxActive from "./template-parts/_checkbox-active.js";

$('.link-color').click(function (e) {
	e.preventDefault();
	$(this).toggleClass('active');
});



$(function () {
	$('.swiper-wallpaper-collection-thumbs').each(function () {
		let max = 1;
		let items = $(this).find('.swiper-slide'),
			len = items.length;
		if (len > max && window.innerWidth < 1400) {
			items = items.slice(max, len);
			items.wrapAll('<div class="hide"></div>');
			$(this).append('<div class="show-more-button"><button type="button" class="btn">Больше ...</button></div>');
		}
	}).on('click', '.show-more-button', function () {
		$(this).closest('.swiper-wallpaper-collection-thumbs').find('.hide > .swiper-slide').unwrap();
		$(this).remove();
	});
})