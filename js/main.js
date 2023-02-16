
var user_connected = false;

function onPageLoad() {
    
	if (document.querySelector("slideshow")) {
		// Slideshow
		slideshow.content.elems = document.querySelectorAll("slideshow slides slide");
		let indicator = document.querySelector("slideshow navigation indicator");
		indicator.innerHTML = "<span class='selected'></span>" + "<span></span>".repeat(slideshow.content.elems.length-1);
		slideshow.indicator.elems = document.querySelectorAll("slideshow navigation indicator span");
		
		if (slideshow.autoscroll > 0) slideshow.timeout = setTimeout(slideshow.scroll, slideshow.autoscroll, "next", true);

        loadReviews();
	}
	
	document.addEventListener('click', function handleClickOutsideBox(event) {
		let account_icone = document.querySelector("header ul li#compte");
		let popup_connected = document.querySelector("header .compte-popup#connecter");
		let popup_disconnected = document.querySelector("header .compte-popup#deconnecter");

		if (!account_icone.contains(event.target)) {
			if (!popup_connected.contains(event.target)) toggleClass(popup_connected, "visible", false);
			if (!popup_disconnected.contains(event.target)) toggleClass(popup_disconnected, "visible", false);
		}
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
