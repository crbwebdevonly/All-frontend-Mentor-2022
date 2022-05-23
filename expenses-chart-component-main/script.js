const ul = document.getElementById("bar-ul");
const data = [
	{
		day: "sun",
		amount: 25.48,
	},
	{
		day: "mon",
		amount: 17.45,
	},
	{
		day: "tue",
		amount: 34.91,
	},
	{
		day: "wed",
		amount: 52.36,
	},
	{
		day: "thu",
		amount: 31.07,
	},
	{
		day: "fri",
		amount: 23.39,
	},
	{
		day: "sat",
		amount: 43.28,
	},
];
// console.log(ul);
let sevenDays = data.map((e) => e.day);
console.log(sevenDays);

let today = sevenDays[new Date().getDay()];
console.log(today);
let contents = "";
data.map((e) => {
	let colorBar = e.day === today ? "var(--Cyan)" : "var(--Soft-red)";
	let h = `${2 * e.amount}px`;
	contents += `<li>
							<div
                                   class="bar"
                                   style="
                                        height: ${h};
                                        background-color:${colorBar} ;
                                   "
                              >
                                   <div class="amount">${e.amount}</div>
                              </div>
                              <div class="day">${e.day}</div>
                         </li>`;
});

ul.innerHTML = contents;