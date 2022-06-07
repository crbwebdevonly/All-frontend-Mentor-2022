const mobileNav = document.getElementById("mobile-nav");

const barsClick = () => {
	console.log("bars");
	mobileNav.classList.add("show");
};

const closeClick = () => {
	console.log("close");
	mobileNav.classList.remove("show");
};

const tab1 = document.getElementById("tab-1");
const tab2 = document.getElementById("tab-2");
const tab3 = document.getElementById("tab-3");
tab1.classList.add("show");
tab2.classList.remove("show");
tab3.classList.remove("show");

const setTab = (tab) => {
	console.log(tab);
	// if (tab === 1) {
	console.log("tab1");
	tab1.classList.add("show");
	tab2.classList.remove("show");
	tab3.classList.remove("show");
	// }
	if (tab === 2) {
		console.log("tab2");
		tab1.classList.remove("show");
		tab2.classList.add("show");
		tab3.classList.remove("show");
	}
	if (tab === 3) {
		console.log("tab3");
		tab1.classList.remove("show");
		tab2.classList.remove("show");
		tab3.classList.add("show");
	}
};

const qaTag = document.getElementById("qa-wrap");
const qArray = [...qaTag.children];
let lastClick = 0;
const questionClick = (num) => {
	qArray.forEach((e, i) => {
		const q1 = qArray[i].getElementsByTagName("path");
		const arow = qArray[i].getElementsByTagName("svg");
		const ans = qArray[i].getElementsByTagName("p");
		ans[0].style.display = "none";
		arow[0].style.transform = "rotate(0deg)";
		q1[0].setAttribute("stroke", "#5267DF");
		if (num - 1 === i && lastClick !== num) {
			ans[0].style.display = "block";
			arow[0].style.transform = "rotate(180deg)";
			q1[0].setAttribute("stroke", "red");
		}
	});
	if (num === lastClick) lastClick = 0;
	else lastClick = num;
};
questionClick(0);

const checkEmail = () => {
	const email = document.getElementById("email-input");
	console.log(email.value);
	const validateEmail = (email) => {
		var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(email);
	};
	let error = !validateEmail(email.value);

	const emailWrap = document.getElementById("email-wrap");
	emailWrap.classList.remove("show-error");
	if (error) {
		emailWrap.classList.add("show-error");
	}
};
