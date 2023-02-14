


var slideshow = {
	selected:		1,
	content:		{
		elems:		[],
	},
	indicator:		{
		elems:		[],
	},
	autoscroll:		5000,			// 0 = no auto scroll, value in milliseconds
};





slideshow.scroll = function(direction, checkVisibility) {
	if (slideshow.timeout) clearTimeout(slideshow.timeout);
    if (slideshow.autoscroll > 0) slideshow.timeout = setTimeout(slideshow.scroll, slideshow.autoscroll, "next", true);

	let previous_indicator = slideshow.indicator.elems[slideshow.selected-1];
	if (direction == "next") {
		slideshow.selected++;
		if (slideshow.selected > slideshow.content.elems.length) slideshow.selected = 1;
	}
	else {
		slideshow.selected--;
		if (slideshow.selected < 1) slideshow.selected = slideshow.content.elems.length;
	}

	let next_slide = slideshow.content.elems[slideshow.selected-1]
	const boundingBox = next_slide.getBoundingClientRect();
	if (boundingBox.y >= 0 || !checkVisibility) {
		next_slide.scrollIntoView({behavior: "smooth", block: "nearest", inline: "nearest"});
	
		let next_indicator = slideshow.indicator.elems[slideshow.selected-1]
		toggleClass(previous_indicator, "selected", false);
		toggleClass(next_indicator, "selected", true);
	}
}





var reviews = [
	{
		avatar:		"img/commentaires/1.png",
		name:		"Pierre Mileton",
		date:		"3 jours",
		body:		"La livraison est top, mes enfants adorent quand c'est papa qui cuisine !"
	},
	{
		avatar:		"img/commentaires/2.png",
		name:		"Damien Faucher",
		date:		"3 jours",
		body:		"Petite rayure sur la gourde au niveau du bouchon mais c'est quasiements invisibles sinon la livraison était rapide !  "
	},
	{
		avatar:		"img/commentaires/3.png",
		name:		"Jean Dupont",
		date:		"3 jours",
		body:		"RAS !"
	},
	{
		avatar:		"img/commentaires/1.png",
		name:		"Jeanne Jassic",
		date:		"3 jours",
		body:		"La gourde est bien"
	},
	{
		avatar:		"img/commentaires/1.png",
		name:		"Pierre Mileton",
		date:		"3 jours",
		body:		"La livraison est top, mes enfants adorent quand c'est papa qui cuisine !"
	},
];


function loadReviews() {
	let div_reviews = document.querySelector("section#reviews .wrapper .reviews");
	reviews.forEach((review, id) => {
		let review_content = `
		<div class="review%SELECTED">
			<div class="info">
				<img src="%AVATAR">
				<div class="separator"></div>
				<h2>%NAME</h2>
			</div>
			<div class="details">
				<div>%DATE</div>
				<div class="separator"></div>
				<div id="etoiles">
					<i class="fa-solid fa-star"></i>
					<i class="fa-solid fa-star"></i>
					<i class="fa-solid fa-star"></i>
					<i class="fa-solid fa-star"></i>
					<i class="fa-regular fa-star"></i>
				</div>
			</div>
			<p>%BODY.</p>
		</div>
        `;
        review_content = review_content.replaceAll("%SELECTED", (id == 0 ? " selected" : " "));
        review_content = review_content.replaceAll("%AVATAR", review.avatar);
        review_content = review_content.replaceAll("%NAME", review.name);
        review_content = review_content.replaceAll("%DATE", review.date);
        review_content = review_content.replaceAll("%BODY", review.body);

        div_reviews.innerHTML += review_content;
	});
}


function scrollReviews(btn) {
	let div_current = document.querySelector("section#reviews .reviews .selected");
	if (btn.id == "next") {
		let div_next = div_current.nextElementSibling;
		if (!div_next) div_next = document.querySelector("section#reviews .reviews .review");

		div_current.classList.remove("selected");
		div_next.classList.add("selected");
		div_next.scrollIntoView({behavior: "smooth", block: "nearest", inline: "center"})
	}
	else {
		let div_previous = div_current.previousElementSibling;
		if (div_previous) {
			div_current.classList.remove("selected");
			div_previous.classList.add("selected");
			div_previous.scrollIntoView({behavior: "smooth", block: "nearest", inline: "center"})
		}
	}
}