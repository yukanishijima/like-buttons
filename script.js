const heartBtn = document.querySelector(".heartBtn");
const heartContainer = document.querySelector(".heart-container");

const breadBtn = document.querySelector(".breadBtn");
const breadContainer = document.querySelector(".bread-container");

const rocketBtn = document.querySelector(".rocketBtn");
const rocketWithFire = document.querySelector(".rocket-fire");
const rocketContainer = document.querySelector(".rocket-container");

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

rocketBtn.addEventListener("click", () => {
	rocketBtn.classList.add("rocket-animation");

	rocketBtn.addEventListener("animationend", () => {
		rocketBtn.classList.remove("rocket-animation");
		rocketBtn.style.display = "none";

		rocketWithFire.style.display = "block";
		rocketWithFire.style.height = "65px";
		rocketWithFire.classList.add("rocket-launch");

		rocketWithFire.addEventListener("animationend", () => {
			rocketWithFire.style.display = "none";
			setTimeout(() => {
				rocketBtn.style.display = "block";
			}, 2000);
		});
	});
});

const alienContainer = document.querySelector(".alien-container");
const curtain = document.querySelector(".curtain");
const beam = document.querySelector(".beam");
const alienBtn = document.querySelector(".alienBtn");

alienBtn.addEventListener("click", () => {
	curtain.classList.add("curtain-animation");

	setTimeout(() => {
		beam.classList.add("beam-animation-down");

		setTimeout(() => {
			alienBtn.classList.add("alien-animation");

			setTimeout(() => {
				beam.classList.add("beam-animation-up");
				beam.classList.remove("beam-animation-down");
			}, 1500);
		}, 3000);
	}, 1200);

	setTimeout(() => {
		beam.classList.remove("beam-animation-up");
		curtain.classList.remove("curtain-animation");

		curtain.classList.add("curtain-open");

		alienBtn.classList.remove("alien-animation");
		alienBtn.classList.add("alien-animation-back");

		setTimeout(() => {
			curtain.classList.remove("curtain-open");
			alienBtn.classList.remove("alien-animation-back");
		}, 1000);
	}, 8200);
});
