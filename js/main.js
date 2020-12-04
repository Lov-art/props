///Slider range !!!!!!!!!!!!!!!!!!
document.getElementById('custom-slider').addEventListener('input', function (event) {
	const value = event.target.value;
	document.getElementById('current-value').innerText = value + ' ' + 'грн';
	document.getElementById('current-value').classList.add('active');
	document.getElementById('current-value').style.left = `${value * 100 / 1000000}%`;
});
let slider = document.getElementById('custom-slider');
slider.addEventListener('mousemove', function () {
	var x = slider.value * 100 / 1000000;
	var color = 'linear-gradient(90deg,rgb(43, 43, 107)' + x + '%, rgb(243, 243, 243)' + x + '%)';
	slider.style.background = color;
})
document.getElementById('custom-slider').addEventListener('blur', function (event) {
	document.getElementById('current-value').classList.remove('active');
});
// Tooltip !!!!!!!!!!!!!!!!!!!
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})
// carousel !!!!!!!!!
$('.carousel').carousel()
// БЛОК С ВОПРОСАМИ
$('.js-btn-readmore').on('click', function () {
	var $btn = $(this);
	$btn.toggleClass('on');
	$btn.toggleClass('off');
	if ($btn.hasClass('off')) {
		$btn.text('-');
	} else {
		$btn.text('+');
	}
})
//language switcher
$(".current_lang").on("click", function () {
	$(this).siblings(".another_lang").fadeToggle(200);
	$(this).parent().toggleClass("open");
});
$(function () {
	$(document).click(function (e) {
		if ($(e.target).closest(".lang_switcher").length) return;
		$(".another_lang").fadeOut(200);
		$(".lang_switcher").removeClass("open");
		e.stopPropagation();
	});
});
// footer
$(".footer_item h3").on("click", function () {
	if ($(window).width() < 576) {
		$(this).toggleClass("show");
		$(this).siblings("ul").slideToggle();
	}
});
//mpbile menu
$(".menu_btn").on("click", function (e) {
	e.preventDefault();
	$(this).toggleClass("open");
	$("header .footer_list").toggleClass("open");
});