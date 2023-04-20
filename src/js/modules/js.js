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

//! sticky sidebar
//? basket page //sticky sidebar
if (window.location.toString().indexOf('basket') > 0) { //добавляє виконання скрипту лиш на певній сторінці
	if (window.innerWidth > 991) {
		StickyMove($('.basket-total-info'), $('.discount'));
	}
}

//? sticky sidebar function
function StickyMove(StickyBlock, DownBlockMove) {

	var top = StickyBlock.offset().top - parseFloat(StickyBlock.css('marginTop').replace(/auto/, 0));
	var footTop = DownBlockMove.offset().top - parseFloat(DownBlockMove.css('marginTop').replace(/auto/, 0));

	var maxY = footTop - StickyBlock.outerHeight();

	StickyBlock.width($('.sticky-wrap').width()); // задає ширину елемента StickyBlock відносно sticky-wrap

	$(window).scroll(function (evt) {
		var y = $(this).scrollTop();
		if (y > top) {
			if (y < maxY) {
				StickyBlock.addClass('fixed').removeAttr('style');
				StickyBlock.width($('.sticky-wrap').width()); // задає ширину елемента StickyBlock відносно sticky-wrap
			} else {
				StickyBlock.removeClass('fixed').css({
					position: 'absolute',
					top: (maxY - top) + 'px'
				});
			}
		} else {
			StickyBlock.removeClass('fixed');
		}
	});
};


//? checkout datepicker arrow
setInterval(function () {
	if ($('.checkout-delivery-accordion #datepicker').hasClass("active")) {
		$(".checkout-delivery-accordion .datepicker").addClass("active");
	}
	else {
		$(".checkout-delivery-accordion .datepicker").removeClass("active");
	}
}, 100);

//? checkout btn-time active
$(function () {
	$('.delivery-time-buttons li').click(function () {
		$('.delivery-time-buttons li').removeClass("active");
		$(this).addClass("active");
	});
});

//! sticky sidebar flex
//? sticky checkout sidebar
if (window.location.toString().indexOf('checkout') > 0) { //добавляє виконання скрипту лиш на певній сторінці
	if (window.innerWidth > 991) {
		var StickyWrapper = document.getElementById("checkout-main"), StickyMain = document.getElementById("checkout-order-data"), StickySidebar = document.getElementById("checkout-order-info"), StickySidebarContent = document.getElementById("checkout-sidebar");
		StickyMoveFlex(StickyWrapper, StickyMain, StickySidebar, StickySidebarContent);
	}
}

//? sticky calculator sidebar
if (window.location.toString().indexOf('calculator') > 0) { //добавляє виконання скрипту лиш на певній сторінці
	if (window.innerWidth > 991) {
		var StickyWrapper = document.getElementById("calculator-main"), StickyMain = document.getElementById("calculator-order-data"), StickySidebar = document.getElementById("calculator-order-info"), StickySidebarContent = document.getElementById("calculator-sidebar");
		StickyMoveFlex(StickyWrapper, StickyMain, StickySidebar, StickySidebarContent);
	}
}

//? sticky wish-list sidebar
if (window.location.toString().indexOf('wish-list') > 0) { //добавляє виконання скрипту лиш на певній сторінці
	if (window.innerWidth > 991) {
		var StickyWrapper = document.getElementById("wish-list-main"), StickyMain = document.getElementById("wish-list-data"), StickySidebar = document.getElementById("wish-list-sidebar-info"), StickySidebarContent = document.getElementById("wish-list-sidebar");
		StickyMoveFlex(StickyWrapper, StickyMain, StickySidebar, StickySidebarContent);
	}
}

//? sticky sidebar flex function 

function StickyMoveFlex(StickyWrapper, StickyMain, StickySidebar, StickySidebarContent) {
	window.onscroll = function () {
		StickySidebar.setAttribute("style", "display:block;width:" + StickySidebarContent.offsetWidth + "px");
		StickySidebar.style.width = StickySidebarContent.offsetWidth;
		//if sidebar smaller than main
		if (StickySidebar.offsetHeight < StickyMain.offsetHeight) {
			//if sidebar smaller than screen - stick to top rather than bottom
			if (StickySidebar.offsetHeight < window.innerHeight) {
				if ((StickyWrapper.getBoundingClientRect().bottom < (window.innerHeight))
					&& ((StickyWrapper.getBoundingClientRect().bottom < StickySidebar.offsetHeight))
				) {
					StickyWrapper.classList.remove("fix-top-VP");
					StickyWrapper.classList.add("flex-bottom");
				}
				else if (StickyWrapper.getBoundingClientRect().top < 0) {
					StickyWrapper.classList.add("fix-top-VP");
					StickyWrapper.classList.remove("flex-bottom");
				}
				else {
					StickyWrapper.classList.remove("fix-top-VP");
					StickyWrapper.classList.remove("flex-bottom");
				}
			}
			//if wrapper taller than sidebar - stick to bottom
			else if (StickySidebar.offsetHeight < StickyWrapper.offsetHeight) {
				if (StickyWrapper.getBoundingClientRect().bottom < (window.innerHeight)) {
					StickyWrapper.classList.remove("fix-bottom-VP");
					StickyWrapper.classList.add("flex-bottom");
				}
				else if (StickyWrapper.getBoundingClientRect().bottom > (StickySidebar.offsetHeight + window.innerHeight)) {
					StickyWrapper.classList.remove("fix-bottom-VP");
					StickyWrapper.classList.remove("flex-bottom");
				}
				else {
					StickyWrapper.classList.add("fix-bottom-VP");
					StickyWrapper.classList.remove("flex-bottom");
				}
			}
		}
	}
}

//? calculator page // vendor-code
$(".collapse-wish-list-vendor-code .table-product").click(function () {
	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
	}
	else {
		$('.collapse-wish-list-vendor-code .table-product').removeClass('active');
		$(this).addClass('active');
	}
});

//? wish list page // ... 
function shorten(text, maxLength, delimiter, overflow) {
	delimiter = delimiter || "&hellip;";
	overflow = overflow || false;
	var ret = text;
	if (ret.length > maxLength) {
		var breakpoint = overflow ? maxLength + ret.substr(maxLength).indexOf(" ") : ret.substr(0, maxLength).lastIndexOf(" ");
		ret = ret.substr(0, breakpoint) + delimiter;
	}
	return ret;
}
if (window.innerWidth < 576) {
	$(function () {
		var $editedText = $(".wish-list .table-product-name");
		var text = $editedText.text();
		$editedText.text(shorten(text, 26, " ...", false));
	});
}

//? single-brand //read more
readMore($('.spoiler'), 3);

function readMore(jObj, lineNum) {
	if (isNaN(lineNum)) {
		lineNum = 2;
	}
	var go = new ReadMore(jObj, lineNum);
}

function ReadMore(_jObj, lineNum) {
	var READ_MORE_LABEL = 'Читать больше';
	var HIDE_LABEL = 'Скрыть';

	var jObj = _jObj;
	var textMinHeight = '' + (parseInt(jObj.children('.hidden-text').css('line-height'), 10) * lineNum) + 'px';
	var textMaxHeight = '' + jObj.children('.hidden-text').css('height');

	jObj.children('.hidden-text').css('height', '' + textMaxHeight);
	jObj.children('.hidden-text').css('transition', 'height .5s');
	jObj.children('.hidden-text').css('height', '' + textMinHeight);

	jObj.append('<button class="btn btn-outline-black-custom btn-read-more d-block mx-auto py-2 py-lg-1 px-5">' + READ_MORE_LABEL + '</button>');

	jObj.children('.btn-read-more').click(function () {
		if (jObj.children('.hidden-text').css('height') === textMinHeight) {
			jObj.children('.hidden-text').css('height', '' + textMaxHeight);
			jObj.children('.btn-read-more').html(HIDE_LABEL).addClass('active');
		} else {
			jObj.children('.hidden-text').css('height', '' + textMinHeight);
			jObj.children('.btn-read-more').html(READ_MORE_LABEL).removeClass('active');
		}
	});
}

//? brands //all-brands-list
$('.all-brands-list li.stock').click(function () {
	$(this).toggleClass("active");
});

//? brands // all-brands-content
$(".all-brands-content .all-brands-item").click(function () {
	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
	}
	else {
		$('.all-brands-content .all-brands-item').removeClass('active');
		$(this).addClass('active');
	}
});