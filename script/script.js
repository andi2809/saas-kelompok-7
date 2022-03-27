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

// Ruangan

// Get the modal
var modal = document.getElementById("myModal");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("myImg");
var button = document.getElementById("button1");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
button.onclick = function () {
	modal.style.display = "block";
	modalImg.src = img1.src;
	modalImg.alt = img1.alt;
	captionText.innerHTML = img1.alt;
};

// When the user clicks on <span> (x), close the modal
modal.onclick = function () {
	img01.className += "out";
	setTimeout(function () {
		modal.style.display = "none";
		img01.className = "modal-content";
	}, 400);
};

//  dua

var modal = document.getElementById("myModal2");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img2 = document.getElementById("myImg2");
var button = document.getElementById("button2")
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption2");
button.onclick = function () {
	modal.style.display = "block";
	modalImg.src = img2.src;
	modalImg.alt = img2.alt;
	captionText.innerHTML = img2.alt;
};

// When the user clicks on <span> (x), close the modal
modal.onclick = function () {
	img02.className += " out";
	setTimeout(function () {
		modal.style.display = "none";
		img02.className = "modal-content";
	}, 400);
};
modal.onclick = function () {
	img02.className += " out";
	setTimeout(function () {
		modal.style.display = "none";
		img02.className = "modal-content";
	}, 400);
};

// tiga

var modal = document.getElementById("myModal3");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img3 = document.getElementById("myImg3");
var button = document.getElementById("button3")
var modalImg = document.getElementById("img03");
var captionText = document.getElementById("caption3");
button.onclick = function () {
	modal.style.display = "block";
	modalImg.src = img3.src;
	modalImg.alt = img3.alt;
	captionText.innerHTML = img3.alt;
};

// When the user clicks on <span> (x), close the modal
modal.onclick = function () {
	img03.className += " out";
	setTimeout(function () {
		modal.style.display = "none";
		img03.className = "modal-content";
	}, 400);
};

// empat

var modal = document.getElementById("myModal4");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img4 = document.getElementById("myImg4");
var button = document.getElementById("button4")
var modalImg = document.getElementById("img04");
var captionText = document.getElementById("caption4");
button.onclick = function () {
	modal.style.display = "block";
	modalImg.src = img4.src;
	modalImg.alt = img4.alt;
	captionText.innerHTML = img4.alt;
};

// When the user clicks on <span> (x), close the modal
modal.onclick = function () {
	img04.className += " out";
	setTimeout(function () {
		modal.style.display = "none";
		img04.className = "modal-content";
	}, 400);
};

// lima

var modal = document.getElementById("myModal5");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img5 = document.getElementById("myImg5");
var button = document.getElementById("button5")
var modalImg = document.getElementById("img05");
var captionText = document.getElementById("caption5");
button.onclick = function () {
	modal.style.display = "block";
	modalImg.src = img5.src;
	modalImg.alt = img5.alt;
	captionText.innerHTML = img5.alt;
};

// When the user clicks on <span> (x), close the modal
modal.onclick = function () {
	img05.className += " out";
	setTimeout(function () {
		modal.style.display = "none";
		img05.className = "modal-content";
	}, 400);
};
