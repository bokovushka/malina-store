const inputRangeRef = document.querySelector('#range');

if (inputRangeRef) {
	const sliderRange = new Slider('#range', {
		formatter: function (value) {
			return `от: ${value[0]} грн, до: ${value[1]} грн`;
		}
	});
	const sliderRangeValues = sliderRange.getValue();
	const inputRangeMinRef = document.querySelector('.input-currency-min');
	const inputRangeMaxRef = document.querySelector('.input-currency-max');

	inputRangeMinRef.value = sliderRangeValues[0];
	inputRangeMaxRef.value = sliderRangeValues[1];

	sliderRange.on('slideStop', function (ev) {
		const sliderRangeValues = sliderRange.getValue();

		inputRangeMinRef.value = sliderRangeValues[0];
		inputRangeMaxRef.value = sliderRangeValues[1];
	});
}