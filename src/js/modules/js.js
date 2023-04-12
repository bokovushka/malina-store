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

// $(".table-color .link-color").click(function () {
// 	if ($(this).hasClass('active')) {
// 		$(this).removeClass('active');
// 	}
// 	else {
// 		$('.table-color .link-color').removeClass('active');
// 		$(this).addClass('active');
// 	}
// });

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

//? single-blog page //tooltip //pin 
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

//? single-blog page //+item btn-share
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

//? archive-catalog page //color active
$('.filter-item--colors .link-color').click(function () {
	$(this).toggleClass("active");
});

//? archive-catalog page //more button
$(".btn-show-more").click(function () {
	if ($(this).closest(".filter-item").find(".content-checkoxs").hasClass("show-more")) {
		$(this).text("Меньше");
	} else {
		$(this).text("Больше");
	}

	$(this).closest(".filter-item").find(".content-checkoxs").toggleClass("show-more");
});

//? archive-catalog page //more button filter result
if (window.innerWidth > 991) {
	$(function () {
		$('.filter-views .filter-views-content').each(function () {
			var w = screen.width;
			if (w < '1200') {
				var value = 5;
			}
			else {
				if (w < '1600') {
					var value = 7;
				}
				else {
					var value = 10;
				}
			}
			let max = value;
			let items = $(this).find('.filter-view-item'),
				len = items.length;
			if (len > max) {
				items = items.slice(max, len);
				items.wrapAll('<div class="hide"></div>');
				$(this).append('<div class="btn-show-more">Больше</div>');
			}
		})
	}).on('click', '.filter-views .filter-views-content .btn-show-more', function () {
		$(this).closest('.filter-views .filter-views-content').toggleClass("show-more").find('.hide > .filter-view-item').unwrap();
		if ($(".filter-views .filter-views-content").hasClass("show-more")) {
			$(this).text("Меньше");
		} else {
			$(this).text("Больше");
			var w = screen.width;
			if (w < '1200') {
				var value = 5;
			}
			else {
				if (w < '1600') {
					var value = 7;
				}
				else {
					var value = 10;
				}
			}
			let max = value;
			$('.filter-views .filter-views-content').each(function () {
				let items = $(this).find('.filter-view-item'),
					len = items.length;
				if (len > max) {
					items = items.slice(max, len);
					items.wrapAll('<div class="hide"></div>');
				}
			})
		}
	});
}

//? archive-catalog page //menu-right-dropdown, .catalog-category-slider hide
setInterval(function () {
	if ($('#archive-catalog-filter-full-tab').hasClass("active")) {
		$(".menu-right-dropdown, .catalog-category-slider").hide();
	}
	else {
		$(".menu-right-dropdown, .catalog-category-slider").show();
	}
}, 100);

//? archive-catalog page //archive-catalog-filter-full //colors
if (window.innerWidth <= 425) {
	$(function () {
		$('.archive-catalog-filter-full .filter-item--colors .colors-wrapper').each(function () {
			let max = 8;
			let items = $(this).find('.color-wrapper'),
				len = items.length;
			if (len > max) {
				items = items.slice(max, len);
				items.wrapAll('<div class="hide"></div>');
				$(this).append('<div class="w-100"></div><div class="btn-show-more">Больше</div>');
			}
		})
	}).on('click', '.archive-catalog-filter-full .filter-item--colors .colors-wrapper .btn-show-more', function () {
		$(this).closest('.archive-catalog-filter-full .filter-item--colors .colors-wrapper').toggleClass("show-more").find('.hide > .color-wrapper').unwrap();
		if ($(".archive-catalog-filter-full .filter-item--colors .colors-wrapper").hasClass("show-more")) {
			$(this).text("Меньше");
		} else {
			$(this).text("Больше");
			let max = 8;
			$('.archive-catalog-filter-full .filter-item--colors .colors-wrapper').each(function () {
				let items = $(this).find('.color-wrapper'),
					len = items.length;
				if (len > max) {
					items = items.slice(max, len);
					items.wrapAll('<div class="hide"></div>');
				}
			})
		}
	});
}

//? archive-catalog page //archive-catalog-filter-full //countries
if (window.innerWidth < 768) {
	$(function () {
		$('.archive-catalog-filter-full .filter-item--countries').each(function () {
			let max = 5;
			let items = $(this).find('.custom-checkbox'),
				len = items.length;
			if (len > max) {
				items = items.slice(max, len);
				items.wrapAll('<div class="hide"></div>');
				$(this).append('<div class="w-100"></div><div class="btn-show-more">Больше</div>');
			}
		})
	}).on('click', '.archive-catalog-filter-full .filter-item--countries .btn-show-more', function () {
		$(this).closest('.archive-catalog-filter-full .filter-item--countries').toggleClass("show-more").find('.hide > .custom-checkbox').unwrap();
		if ($(".archive-catalog-filter-full .filter-item--countries").hasClass("show-more")) {
			$(this).text("Меньше");
		} else {
			$(this).text("Больше");
			let max = 5;
			$('.archive-catalog-filter-full .filter-item--countries').each(function () {
				let items = $(this).find('.custom-checkbox'),
					len = items.length;
				if (len > max) {
					items = items.slice(max, len);
					items.wrapAll('<div class="hide"></div>');
				}
			})
		}
	});
}

//? archive-catalog page //archive-catalog-filter-full //coat-material
if (window.innerWidth < 768) {
	$(function () {
		$('.archive-catalog-filter-full .filter-item--coat-material').each(function () {
			let max = 4;
			let items = $(this).find('.custom-checkbox'),
				len = items.length;
			if (len > max) {
				items = items.slice(max, len);
				items.wrapAll('<div class="hide"></div>');
				$(this).append('<div class="w-100"></div><div class="btn-show-more">Больше</div>');
			}
		})
	}).on('click', '.archive-catalog-filter-full .filter-item--coat-material .btn-show-more', function () {
		$(this).closest('.archive-catalog-filter-full .filter-item--coat-material').toggleClass("show-more").find('.hide > .custom-checkbox').unwrap();
		if ($(".archive-catalog-filter-full .filter-item--coat-material").hasClass("show-more")) {
			$(this).text("Меньше");
		} else {
			$(this).text("Больше");
			let max = 4;
			$('.archive-catalog-filter-full .filter-item--coat-material').each(function () {
				let items = $(this).find('.custom-checkbox'),
					len = items.length;
				if (len > max) {
					items = items.slice(max, len);
					items.wrapAll('<div class="hide"></div>');
				}
			})
		}
	});
}

//? busket page //sticky sidebar
if (window.innerWidth > 991) {
	$(function () {
		var top = $('#busket-total-info').offset().top - parseFloat($('#busket-total-info').css('marginTop').replace(/auto/, 0));
		var footTop = $('.discount').offset().top - parseFloat($('.discount').css('marginTop').replace(/auto/, 0));

		var maxY = footTop - $('#busket-total-info').outerHeight();

		$(window).scroll(function (evt) {
			var y = $(this).scrollTop();
			if (y > top) {
				if (y < maxY) {
					$('#busket-total-info').addClass('fixed').removeAttr('style');
				} else {
					$('#busket-total-info').removeClass('fixed').css({
						position: 'absolute',
						top: (maxY - top) + 'px'
					});
				}
			} else {
				$('#busket-total-info').removeClass('fixed');
			}
		});
	});
}
