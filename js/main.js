
var user_connected = false;

function onPageLoad() {

	if (document.querySelector("slideshow")) {
		// Slideshow
		slideshow.content.elems = document.querySelectorAll("slideshow slides slide");
		let indicator = document.querySelector("slideshow navigation indicator");
		indicator.innerHTML = "<span class='selected'></span>" + "<span></span>".repeat(slideshow.content.elems.length - 1);
		slideshow.indicator.elems = document.querySelectorAll("slideshow navigation indicator span");

		if (slideshow.autoscroll > 0) slideshow.timeout = setTimeout(slideshow.scroll, slideshow.autoscroll, "next", true);

		loadReviews();
	}

	document.addEventListener('click', function handleClickOutsideBox(event) {
		let burger_menu_btn = document.querySelector("header a.burger");
		let header_menu = document.querySelector("header .mobile");
		if (!burger_menu_btn.contains(event.target)) {
			if (!header_menu.contains(event.target)) if (header_menu.classList.contains("visible")) header_menu.classList.remove("visible");
		}


		let account_icone = document.querySelector("header ul li#compte");
		let popup_connected = document.querySelector("header .compte-popup#connecter");
		let popup_disconnected = document.querySelector("header .compte-popup#deconnecter");

		if (!account_icone.contains(event.target)) {
			if (!popup_connected.contains(event.target)) toggleClass(popup_connected, "visible", false);
			if (!popup_disconnected.contains(event.target)) toggleClass(popup_disconnected, "visible", false);
		}
	});


	let img_recette = document.querySelector('.img-recette');
	let button_close = document.querySelector('.fermer-recette');
	img_recette.addEventListener('click', function () {
		document.querySelector('#popup1').style.display = 'block';
	});
	button_close.addEventListener('click', function () {
		document.querySelector('#popup1').style.display = 'none';
	});
}
window.addEventListener("load", onPageLoad);


function toggleHeaderMenu() {
	let header_menu = document.querySelector("header .mobile");
	toggleClass(header_menu, "visible");
}

function toggleAccountPopup() {
	let popup_connected = document.querySelector("header .compte-popup#connecter");
	let popup_disconnected = document.querySelector("header .compte-popup#deconnecter");

	if (user_connected) {
		toggleClass(popup_connected, "visible");
		toggleClass(popup_disconnected, "visible", false);
	}
	else {
		toggleClass(popup_connected, "visible", false);
		toggleClass(popup_disconnected, "visible");
	}
}

function logUserIn() {
	user_connected = true;
	toggleAccountPopup()
}

function logUserOut() {
	user_connected = false;
	toggleAccountPopup()
}

function addAnotherAddress() {
	let second_address = document.querySelector("section#champs .livraison#deuxieme-adresse");
	second_address.style.display = "flex";
}

function addQuantity(amount) {
	let quantity_box = document.querySelector(".le-panier #infos-panier #photo-box #quantite-box");
	if (quantity_box) {
		let span = quantity_box.querySelector("span");
		amount += parseInt(span.innerHTML);
		span.innerHTML = Math.max(1, amount);
	}
}




function toggleClass(element, className, state) {
	if (state != undefined) {
		if (state) element.classList.add(className);
		else element.classList.remove(className);
	}
	else {
		if (element.classList.contains(className)) element.classList.remove(className);
		else element.classList.add(className);
	}
}
