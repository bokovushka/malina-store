$('.filter-item--type .custom-control-label').click(function () {
	$('.filter-item--type .custom-checkbox').removeClass('active');
	$(this).closest('.custom-checkbox').addClass('active');
});