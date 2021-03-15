var heartBtn = document.querySelector(".heartBtn");
var heartContainer = document.querySelector(".heart-container");

var breadBtn = document.querySelector(".breadBtn");
var breadContainer = document.querySelector(".bread-container");

heartBtn.addEventListener("click", () => {
	reset();
	for (let i = 0; i < 5; i++) {
		var div = document.createElement("div");
		div.classList.add("heart");
		div.classList.add("heart-animation" + i);
		heartContainer.appendChild(div);
		reset();
	}
});

function reset() {
	var hearts = document.querySelectorAll(".heart");
	if (0 < hearts.length) {
		for (let i = 0; i < hearts.length; i++) {
			hearts[i].addEventListener("animationend", () => {
				hearts[i].remove();
			});
		}
	}
}

breadBtn.addEventListener("click", () => {
	reset();
	for (let i = 0; i < 2; i++) {
		var div = document.createElement("div");
		div.classList.add("bread");
		div.classList.add("bread-animation" + i);
		breadContainer.appendChild(div);
		reset();
	}
});

function reset() {
	var breads = document.querySelectorAll(".bread");
	if (0 < breads.length) {
		for (let i = 0; i < breads.length; i++) {
			breads[i].addEventListener("animationend", () => {
				breads[i].remove();
			});
		}
	}
}
