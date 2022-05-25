const submitButton = document.getElementById("submit");
// submitButton.setAttribute("disabled", true);
submitButton.disabled = true;

const thankYou = document.getElementById("thank-you");
thankYou.classList.add("hide");
let v = 0;
// thankYou.classList.add("show");
const rating = document.getElementById("rating");
// rating.classList.add("hide");
// console.log(thankYou, rating);

const setThankYou = () => {
	console.log("clicked");
	// if (v === 0) return;
	thankYou.classList.remove("hide");
	thankYou.classList.add("show");
	rating.classList.add("hide");
};

const numbersUL = document.getElementById("numbers-ul");
let listItems = Array.from(numbersUL.children);
listItems.forEach((e) =>
	e.addEventListener("click", (ev) => {
		// submitButton.setAttribute("disabled", false);
		submitButton.disabled = false;

		listItems.forEach((li) => {
			li.classList.remove("selected");
		});
		// let
		v = ev.target.innerText;
		ev.target.classList.add("selected");
		document.getElementById(
			"message"
		).innerText = `You selected ${v} out of 5`;
	})
);
