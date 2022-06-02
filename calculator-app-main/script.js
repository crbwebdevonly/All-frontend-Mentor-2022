// const themeToggle = document.getElementById("toggle-theme");
// themeToggle.addEventListener("click", () => {
// 	document.documentElement.setAttribute("data-theme", "theme-2");
// });
document.documentElement.setAttribute("data-theme", "theme-1");
const dot = document.getElementById("dot");
dot.style.transform = "translateX(0%)";
//
const themeToggle = document.getElementById("transparent-click-wrap");
themeToggle.addEventListener("click", (e) => {
	console.log(e.target.id);
	if (e.target.id === "click1") {
		document.documentElement.setAttribute("data-theme", "theme-1");
		dot.style.transform = "translateX(0%)";
	}
	if (e.target.id === "click2") {
		document.documentElement.setAttribute("data-theme", "theme-2");
		dot.style.transform = "translateX(120%)";
	}
	if (e.target.id === "click3") {
		document.documentElement.setAttribute("data-theme", "theme-3");
		dot.style.transform = "translateX(230%)";
	}
});

const ans = document.getElementById("ans");
const numUL = [...document.getElementById("num-pad").children];
console.log(numUL);
let num1 = "";
let num2 = "";
let op = "";
let displayString = "";
numUL.map((e) => {
	e.addEventListener("click", (e) => {
		// console.log(e.target.textContent);

		if (e.target.textContent === "reset") {
			ans.textContent = 0;
			num1 = "";
			num2 = "";
			op = "";
			displayString = "";
		} else if (e.target.textContent === "del") {
			if (!op) {
				if (!num1) return;
				console.log(num1, "del num1");
				num1 = num1.slice(0, -1);
			} else num2 = num2.slice(0, -1);
			// return;
		} else if (e.target.textContent === "=") {
			console.log("result");
			const n1 = parseFloat(num1);
			const n2 = parseFloat(num2);
			let result = 0;
			if (op === "+") result = n1 + n2;
			if (op === "/") result = n1 / n2;
			if (op === "-") result = n1 - n2;
			if (op === "*") result = n1 * n2;
			ans.textContent = result;
			num1 = "" + result;
			num2 = "";
			op = "";
			// displayString = "";
			return;
		} else if (e.target.textContent === "+") {
			const n1 = parseFloat(num1);
			const n2 = parseFloat(num2);
			let result = 0;
			if (op === "+") result = n1 + n2;
			if (op === "/") result = n1 / n2;
			if (op === "-") result = n1 - n2;
			if (op === "*") result = n1 * n2;
			ans.textContent = result;
			num1 = "" + result;
			num2 = "";
			op = "+";
		} else if (e.target.textContent === "-") {
			const n1 = parseFloat(num1);
			const n2 = parseFloat(num2);
			let result = 0;
			if (op === "+") result = n1 + n2;
			if (op === "/") result = n1 / n2;
			if (op === "-") result = n1 - n2;
			if (op === "*") result = n1 * n2;
			ans.textContent = result;
			num1 = "" + result;
			num2 = "";
			op = "-";
		} else if (e.target.textContent === "/") {
			const n1 = parseFloat(num1);
			const n2 = parseFloat(num2);
			let result = 0;
			if (op === "+") result = n1 + n2;
			if (op === "/") result = n1 / n2;
			if (op === "-") result = n1 - n2;
			if (op === "*") result = n1 * n2;
			ans.textContent = result;
			num1 = "" + result;
			num2 = "";
			op = "/";
		} else if (e.target.textContent === "x") {
			const n1 = parseFloat(num1);
			const n2 = parseFloat(num2);
			let result = 0;
			if (op === "+") result = n1 + n2;
			if (op === "/") result = n1 / n2;
			if (op === "-") result = n1 - n2;
			if (op === "*") result = n1 * n2;
			ans.textContent = result;
			num1 = "" + result;
			num2 = "";
			op = "*";
		} else {
			if (!op) {
				num1 += e.target.textContent;
			} else num2 += e.target.textContent;
		}
		displayString = num1 + op + num2 || "0";
		ans.textContent = displayString;
		console.log(num1, "num1");
		console.log(num2, "num2");
	});
});
