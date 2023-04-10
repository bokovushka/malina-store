import $ from 'jquery';
import "/node_modules/fastselect/dist/fastselect.standalone.js";

$('.multipleSelect').fastselect({
	placeholder: 'Поиск по бренду',
	noResultsText: 'Не найдено',
}
);

setInterval(function () {
	$('.fstQueryInput').attr('placeholder', 'Поиск по бренду');
}, 100);
