import RangeSlider from "/node_modules/svelte-range-slider-pips/dist/svelte-range-slider-pips.mjs";
let PriceSlider = new RangeSlider({
	target: document.getElementById("price-slider"),
	props: {
		min: 0,
		max: 10000,
		values: [0, 10000],
		step: 1,
		range: true,
		float: true,
		suffix: " грн",
		// pushy: true, // чи штовхає один іншого  default false
		// pips: true,
		// pipstep: 1000,
		// all: "label",
		// first: "label",
		// last: "label",
		// rest: "label"
		// all: "label",
		// hoverable: false,
		// prefix: "$"
	}
});

let PriceSliderFull = new RangeSlider({
	target: document.getElementById("price-slider-full"),
	props: {
		min: 0,
		max: 10000,
		values: [0, 10000],
		step: 1,
		range: true,
		float: true,
		suffix: " грн",
		// pushy: true, // чи штовхає один іншого  default false
		// pips: true,
		// pipstep: 1000,
		// all: "label",
		// first: "label",
		// last: "label",
		// rest: "label"
		// all: "label",
		// hoverable: false,
		// prefix: "$"
	}
});

let CurrencyFirst = document.querySelector(".currency-first");
let CurrencyLast = document.querySelector(".currency-last");

//змінює значення при використанні повзунка
PriceSlider.$on('change', function (e) {
	CurrencyFirst.value = e.detail.values[0];
	CurrencyLast.value = e.detail.values[1];
});

//змінює значення в інпутах
CurrencyFirst.addEventListener("change", (e) => {
	PriceSlider.$set({ values: [CurrencyFirst.value, CurrencyLast.value] });
});

CurrencyLast.addEventListener("change", (e) => {
	PriceSlider.$set({ values: [CurrencyFirst.value, CurrencyLast.value] });
});

//змінює значення при використанні повзунка
PriceSliderFull.$on('change', function (e) {
	CurrencyFirst.value = e.detail.values[0];
	CurrencyLast.value = e.detail.values[1];
});

//змінює значення в інпутах
CurrencyFirst.addEventListener("change", (e) => {
	PriceSliderFull.$set({ values: [CurrencyFirst.value, CurrencyLast.value] });
});

CurrencyLast.addEventListener("change", (e) => {
	PriceSliderFull.$set({ values: [CurrencyFirst.value, CurrencyLast.value] });
});
