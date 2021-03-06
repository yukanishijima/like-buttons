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

const delay = (time) =>
	new Promise((resolve) => {
		setTimeout(resolve, time);
	});

alienBtn.addEventListener("click", () => {
	curtain.classList.add("curtain-blackout");

	delay(1200).then(() => {
		beam.classList.add("beam-down");
		delay(3000).then(() => {
			alienBtn.classList.add("alien-travel");
			delay(1500).then(() => {
				beam.classList.add("beam-up");
				beam.classList.remove("beam-down");
			});
		});
	});

	delay(8200).then(() => {
		beam.classList.remove("beam-up");
		curtain.classList.remove("curtain-blackout");

		curtain.classList.add("curtain-lightup");

		alienBtn.classList.remove("alien-travel");
		alienBtn.classList.add("alien-back");

		delay(1000).then(() => {
			curtain.classList.remove("curtain-lightup");
			alienBtn.classList.remove("alien-back");
		});
	});
});
