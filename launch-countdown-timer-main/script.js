console.log();

const min = document.getElementById("minute-number");
const sec = document.getElementById("second-number");
console.log(min);
console.log(sec);

const myInterval = setInterval(() => {
	let second = parseInt(sec.innerText);
	let minute = parseInt(min.innerText);
	if (second === 1) {
		second = 00;
		minute -= 1;
	} 
     else if (second === 0) {
		second = 59;
	}
     else {
		second -= 1;
	}
	min.textContent = minute;
	sec.textContent = second;
}, 1000);
