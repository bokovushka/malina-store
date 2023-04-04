//? index page // +item banner
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

//? single-product page //+item room
$(function () {
	$('.product-info-content .info-content-table .table-room .table-value').each(function () {
		let max = 4;
		let items = $(this).find('span'),
			len = items.length;
		items = items.slice(max, len);
		items.wrapAll('<div class="hide"></div>');
		$(this).append('<div class="show-more">+ ' + (len - max) + '</div>');
	}).on('click', '.show-more', function () {
		$(this).closest('.product-info-content .info-content-table .table-room .table-value').css('margin-right', '-3px').find('.hide > span').unwrap();
		$(this).remove();
	});
})

//? single-product page // color
$('.table-color .link-color').click(function () {
	$('.table-color .link-color').removeClass('active');
	$(this).addClass('active');
})

//? single-product page //+item color
$(function () {
	$('.product-info-content .info-content-table .table-color .table-value').each(function () {
		let max = 5;
		let items = $(this).find('.link-color'),
			len = items.length;
		if (len > max) {
			items = items.slice(max, len);
			items.wrapAll('<div class="hide"></div>');
			$(this).append('<div class="show-more">+ ' + (len - max) + '</div>');
		}
	}).on('click', '.show-more', function () {
		$(this).closest('.product-info-content .info-content-table .table-color .table-value').css('margin-right', '-7px').find('.hide > .link-color').unwrap();
		$(this).remove();
	});
})

//? tooltip //pin //single-blog page
$(document).mouseup(function (e) { // событие клика по веб-документу
	const div = $(".tooltip-preview"); // тут указываем ID элемента

	div.each(function () {
		if (!$(this).is(e.target) // если клик был не по нашему блоку
			&& $(this).has(e.target).length === 0) { // и не по его дочерним элементам
			$(this).removeClass('active'); // скрываем его
		}
	});
});

$(".btn-tooltip-preview").click(function () {
	$(this).closest(".tooltip-preview").toggleClass("active");
});
$(".tooltip-preview .sub-menu").click(function () {
	$(this).closest(".tooltip-preview").addClass("active");
});

//? tooltip //single-blog page

$(function () {
	$('.article .share .share-buttons').each(function () {
		var w = screen.width;
		if (w < '576') {
			var value = 3;
		}
		else {
			if (w < '768') {
				var value = 4;
			}
			else {
				if (w < '1400') {
					var value = 5;
				}
				else {
					if (w < '1600') {
						var value = 7;
					}
				}
			}
		}
		let max = value;
		let items = $(this).find('.btn-share'),
			len = items.length;
		if (len > max) {
			items = items.slice(max, len);
			items.wrapAll('<div class="hide"></div>');
			$(this).append('<div class="btn-share btn-share-more"><div class="icon"><svg><use xlink:href="img/icons/icons.svg#i-share-more"></use></svg></div><div class="btn-share-title">Еще</div></div>');
		}
	}).on('click', '.btn-share-more', function () {
		$(this).closest('.article .share .share-buttons').find('.hide > .btn-share').unwrap();
		$(this).remove();
	});
})