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
let num1 = "0";
let num2 = "";
let op = "";
let op1 = "";
let op2 = "";
let result = 0;
let displayString = "0";

const calcResult = (opIN) => {
	// op = opIN;
	// if (!op1) op1 = opIN;
	if (!num1) {
		return;
	}

	const n1 = parseFloat(num1);
	// if (!num2) {
	// 	result = n1;
	// 	return;
	// }
	const n2 = parseFloat(num2);
	console.log("n1>", n1, " ", op, "<n2>", n2);
	// if (op === "+") result = n1 + n2;
	if (op === "+") add();
	// if (op === "/") result = n1 / n2;
	if (op === "/") div();
	// if (op === "-") result = n1 - n2;
	if (op === "-") sub();
	// if (op === "*") result = n1 * n2;
	if (op === "*") mul();
	console.log("result>>", result);

	if (opIN === "=") op = "";
	else op = opIN;

	// num1 = "" + result;
	// num2 = "";
	// displayString = num1;
};
const add = () => {
	const n1 = parseFloat(num1 || 0);

	const n2 = parseFloat(num2 || 0);
	console.log("n1>", n1, " ", op, "<n2>", n2);
	result = n1 + n2;

	console.log("result>>", result);

	num1 = "" + result;
	num2 = "";
	displayString = num1;
};

const sub = () => {
	const n1 = parseFloat(num1 || 0);

	const n2 = parseFloat(num2 || 0);
	console.log("n1>", n1, " ", op, "<n2>", n2);
	result = n1 - n2;

	console.log("result>>", result);

	num1 = "" + result;
	num2 = "";
	displayString = num1;
};
const mul = () => {
	const n1 = parseFloat(num1 || 0);

	const n2 = parseFloat(num2 || 1);
	console.log("n1>", n1, " ", op, "<n2>", n2);
	result = n1 * n2;

	console.log("result>>", result);

	num1 = "" + result;
	num2 = "";
	displayString = num1;
};
const div = () => {
	const n1 = parseFloat(num1 || 0);

	const n2 = parseFloat(num2);
	console.log(n2, "div");
	if (n2 === 0) {
		console.log("d0-error??");
		displayString = "error";
		ans.textContent = displayString;

		setTimeout(() => {
			console.log("d0-error??timeout");
			reset();
		}, 2000);
		return;
	} else {
		console.log("n1>", n1, " ", op, "<n2>", n2);
		result = n1 / n2;

		console.log("result>>", result);

		num1 = "" + result;
		num2 = "";
		displayString = num1;
	}
};
const reset = () => {
	num1 = "0";
	num2 = "";
	op = "";
	result = 0;
	displayString = "0";
	ans.textContent = displayString;
};

const del = () => {
	if (num1 && op) {
		if (!num2) {
			op = "";
			return;
		} else num2 = num2.slice(0, -1);
	} else if (!op) {
		if (!num1) return;
		num1 = num1.slice(0, -1);
		if (!num1) num1 = "0";
	}
};
numUL.map((e) => {
	e.addEventListener("click", (e) => {
		// console.log(e.target.textContent);

		if (e.target.textContent === "reset") {
			reset();
			return;
		} else if (e.target.textContent === "del") {
			del();
			// return;
		} else if (e.target.textContent === "=") {
			calcResult("=");
		} else if (e.target.textContent === "+") {
			if (!op) op = "+";
			else calcResult("+");
			// add();
		} else if (e.target.textContent === "-") {
			// calcResult("-");

			// op = "-";
			if (!op) op = "-";
			else calcResult("-");

			// sub();
		} else if (e.target.textContent === "/") {
			// op = "/";
			if (!op) op = "/";
			else calcResult("/");
			// div();
		} else if (e.target.textContent === "x") {
			// op = "*";
			if (!op) op = "*";
			else calcResult("*");
			//  mul();
		} else {
			if (!op) {
				num1 += e.target.textContent;
			} else num2 += e.target.textContent;
		}

		console.log("------------------------------");
		console.log("num1>", num1);
		console.log("num2>", num2);
		console.log("op>>", op);
		console.log("display>>", displayString);
		//
		displayString = num1 + op + num2;
		ans.textContent = displayString;
		console.log("------------------------------");
	});
});
