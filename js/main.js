
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
}
window.addEventListener("load", onPageLoad);






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
