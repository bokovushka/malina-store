import Swiper from 'swiper/bundle';

//? swiper-wallpaper-collection-thumbs
var SwiperWallpaperCollectionThumbs = new Swiper('.swiper-wallpaper-collection-thumbs', {
	spaceBetween: 10,
	freeMode: true,
	watchSlidesProgress: true,
});

// ?swiper-wallpaper-collection
var SwiperWallpaperCollection = new Swiper('.swiper-wallpaper-collection', {
	grabCursor: true,
	slidesPerView: 1,
	navigation: {
		nextEl: ".banner-top .swiper-buttons .button-slider-next",
		prevEl: ".banner-top .swiper-buttons .button-slider-prev",
	},
	thumbs: {
		swiper: SwiperWallpaperCollectionThumbs,
	},
});

//? swiper-cards-products
var SwiperCardsProducts = new Swiper('.swiper-cards-products', {
	spaceBetween: 16,
	navigation: {
		nextEl: ".product-collection-slider .swiper-buttons .button-slider-next",
		prevEl: ".product-collection-slider .swiper-buttons .button-slider-prev",
	},
	pagination: {
		el: ".product-collection-slider .swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		1200: {
			slidesPerView: 4,
			spaceBetween: 32,
		},
		768: {
			slidesPerView: 3,
		},
		375: {
			spaceBetween: 20,
			slidesPerView: 2,
			grid: {
				rows: 2,
				fill: "row",
			},
		}
	},
});

//? swiper-collection-preview
var SwiperCollectionPreview = new Swiper('.swiper-collection-preview', {
	slidesPerView: 1,
	grabCursor: true,
	navigation: {
		nextEl: ".swiper-collection-preview .swiper-buttons .button-slider-next",
		prevEl: ".swiper-collection-preview .swiper-buttons .button-slider-prev",
	},
});

//? swiper-single-wallpaper-thumbs
var SwiperSingleWallpaperThumbs = new Swiper('.swiper-single-wallpaper-thumbs', {
	direction: "vertical",
	slidesPerView: 3,
	slidesPerGroup: 3,
	spaceBetween: 2,
	watchSlidesProgress: true,
	navigation: {
		nextEl: ".swiper-single-wallpaper-thumbs-wrap .button-slider-next",
		prevEl: ".swiper-single-wallpaper-thumbs-wrap .button-slider-prev",
	},
	pagination: {
		el: ".swiper-single-wallpaper-thumbs-wrap .swiper-pagination",
		clickable: true,
	},
});

//? swiper-single-wallpaper
var SwiperSingleWallpaper = new Swiper('.swiper-single-wallpaper', {
	slidesPerView: 1,
	// simulateTouch: 0,
	thumbs: {
		swiper: SwiperSingleWallpaperThumbs,
	},
	pagination: {
		el: ".swiper-single-wallpaper-wrap .swiper-pagination",
		clickable: true,
	},
});

//? cards-products
// if (window.innerWidth < 768) {
// 	$('.cards-products').addClass('swiper-container');
// 	$('.cards-products .cards-products-inner').addClass('swiper-wrapper');
// 	$('.cards-products .card-item').addClass('swiper-slide');
// 	var mySwiper = new Swiper('.card-products-more', {
// 		slidesPerView: 2,
// 		spaceBetween: 20,
// 		grid: {
// 			rows: 2,
// 			fill: "row",
// 		},
// 	});
// }

//? swiper-blog-banner-top
var SwiperBlogBannerTop = new Swiper('.swiper-blog-banner-top', {
	grabCursor: true,
	slidesPerView: 1.5,
	centeredSlides: true,
	spaceBetween: 32,
	// initialSlide: 1,
	loop: true,
	navigation: {
		nextEl: ".blog-banner-top .swiper-buttons .button-slider-next",
		prevEl: ".blog-banner-top .swiper-buttons .button-slider-prev",
	},
	pagination: {
		el: ".blog-banner-top .swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		992: {},
		768: {
			spaceBetween: 16,
		},
		375: {
			spaceBetween: 10,
			slidesPerView: 1.1,
		}
	}
});


var swiper = new Swiper(".nav-blog-category", {
	// direction: "vertical",
	slidesPerView: "auto",
	spaceBetween: 50,
	freeMode: true,
	scrollbar: {
		el: ".swiper-scrollbar",
		// draggable: true,
	},
	mousewheel: true,
});