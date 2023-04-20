import $ from 'jquery';
import "/node_modules/fastselect/dist/fastselect.standalone.js";

//? archive catalog
$('.select-brands').fastselect({
	placeholder: 'Поиск по бренду',
	noResultsText: 'Не найдено',
}
);

setInterval(function () {
	$('.filter-item--brands .fstQueryInput').attr('placeholder', 'Поиск по бренду');
}, 100);

$('.select-subjects').fastselect({
	placeholder: 'Поиск по тематике',
	noResultsText: 'Не найдено',
}
);

setInterval(function () {
	$('.filter-item--subject .fstQueryInput').attr('placeholder', 'Поиск по тематике');
}, 100);

//? checkout
$('.address-select').fastselect({
	searchPlaceholder: 'Поиск улицы',
	placeholder: 'Поиск улицы',
	noResultsText: 'Не найдено',
}
);
$('.city-select').fastselect({
	searchPlaceholder: 'Поиск города',
	placeholder: 'Поиск города',
	noResultsText: 'Не найдено',
}
);

//? calculator
$('.select-vendor-code').fastselect({
	placeholder: 'Введите артикул рулона',
	noResultsText: 'Не найдено',
}
);

setInterval(function () {
	$('.filter-item--vendor-code .fstQueryInput').attr('placeholder', 'Введите артикул рулона');
}, 100);

//? calculator
$('.select-wallpaper-width').fastselect({
	searchPlaceholder: 'Поиск по ширине рулона',
	noResultsText: 'Не найдено',
}
);

//? popup-modal-taxi
$('.select-static-city').fastselect({
	searchPlaceholder: 'Поиск города',
	noResultsText: 'Не найдено',
}
);