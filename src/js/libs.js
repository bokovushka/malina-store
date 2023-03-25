import 'bootstrap';
import Swiper from 'swiper/bundle';
// import * as Sliders from "./modules/sliders.js";

//sliders
//swiper-wallpaper-collection-thumbs
var SwiperWallpaperCollectionThumbs = new Swiper('.swiper-wallpaper-collection-thumbs', {
	slidesPerView: 2,
	spaceBetween: 10,
	freeMode: true,
	watchSlidesProgress: true,
});
//swiper-wallpaper-collection
var SwiperWallpaperCollection = new Swiper('.swiper-wallpaper-collection', {
	grabCursor: true,
	navigation: {
		nextEl: ".swiper-wallpaper-collection-buttons .button-next",
		prevEl: ".swiper-wallpaper-collection-buttons .button-prev",
	},
	thumbs: {
		swiper: SwiperWallpaperCollectionThumbs,
	},
});
