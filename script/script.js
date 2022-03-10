//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
// Akhir To Top

// Akhir Slider Untuk Guru
// Slider untuk Siswa
function guru() {
	$(".guru-container").slick({
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 1,
		slidesToScroll: true,
	});
}

$(window).resize(function () {
	var $windowWidth = $(document).width();
	if ($windowWidth < 1000) {
		guru();
	} else {
		$(".guru-container").slick("unslick");
	}
});

function slickfy() {
	$(".container-siswa-slider").slick({
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 1,
		slidesToScroll: true,
		slide: ".siswa-slider",
	});
}

$(window).resize(function () {
	var $windowWidth = $(document).width();
	if ($windowWidth < 700) {
		slickfy();
	} else {
		$(".container-siswa-slider").slick("unslick");
	}
});
