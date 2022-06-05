const currentUser = {
	image: {
		png: "./images/avatars/image-juliusomo.png",
		webp: "./images/avatars/image-juliusomo.webp",
	},
	username: "juliusomo",
};

let commentsArray = [
	{
		id: 1,
		content: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
		createdAt: "1 month ago",
		score: 12,
		user: {
			image: {
				png: "./images/avatars/image-amyrobson.png",
				webp: "./images/avatars/image-amyrobson.webp",
			},
			username: "amyrobson",
		},
		replies: [],
	},
	{
		id: 2,
		content: "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
		createdAt: "2 weeks ago",
		score: 5,
		user: {
			image: {
				png: "./images/avatars/image-maxblagun.png",
				webp: "./images/avatars/image-maxblagun.webp",
			},
			username: "maxblagun",
		},
		replies: [
			{
				id: 3,
				content: "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
				createdAt: "1 week ago",
				score: 4,
				replyingTo: "maxblagun",
				user: {
					image: {
						png: "./images/avatars/image-ramsesmiron.png",
						webp: "./images/avatars/image-ramsesmiron.webp",
					},
					username: "ramsesmiron",
				},
				replies: [],
			},
			{
				id: 4,
				content: "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
				createdAt: "2 days ago",
				score: 2,
				replyingTo: "ramsesmiron",
				user: {
					image: {
						png: "./images/avatars/image-juliusomo.png",
						webp: "./images/avatars/image-juliusomo.webp",
					},
					username: "juliusomo",
				},
				replies: [],
			},
		],
	},
];

let currentDeleteID = null;
const modalTag = document.getElementById("modal");

const handleDeleteClick = (id) => {
	currentDeleteID = id;
	modalTag.classList.add("show");
};
const deletYes_orginal = () => {
	if (currentDeleteID === null) return;

	let i = commentsArray.findIndex((e) => e.id === currentDeleteID);
	console.log(i, "find");
	if (i >= 0) {
		commentsArray.splice(i, 1);
	}
	if (i < 0) {
		commentsArray.forEach((e) => {
			let i2 = e.replies.findIndex((r) => r.id === currentDeleteID);
			if (i2 >= 0) {
				e.replies.splice(i2, 1);
				// break;
			}
		});
	}

	currentDeleteID = null;
	modalTag.classList.remove("show");
	redraw();
};
let checkout2 = false;

const deletYes = (a) => {
	if (!a) a = commentsArray;
	let id = currentDeleteID;

	for (let i = 0; i < a.length; i++) {
		if (checkout2) break;

		if (a[i].id === id) {
			a.splice(i, 1);
			checkout2 = true;
			break;
		}
		deletYes(a[i].replies);
	}

	if (checkout2) {
		checkout2 = false;
		currentDeleteID = null;
		modalTag.classList.remove("show");
		redraw();
	}
};
const deletNo = () => {
	currentDeleteID = null;
	modalTag.classList.remove("show");
};

const handleEditClick = (id) => {
	const editWrapTag = document.getElementById(`edit-comment-wrap-${id}`);
	editWrapTag.classList.add("show");
	const textInputTag = document.getElementById(`edit-comment-input-${id}`);

	const pTag = document.getElementById(`comment-${id}`);
	pTag.classList.remove("show");

	let item = null;
	const recur = (a) => {
		for (let i = 0; i < a.length; i++) {
			if (a[i].id === id) {
				item = a[i];
				break;
			}
		}
		if (!item) {
			for (let i = 0; i < a.length; i++) {
				recur(a[i].replies);
			}
		}
	};

	recur(commentsArray);

	if (item) {
		textInputTag.value = item.content;
	}
};

const handleUpdateClick = (id) => {
	const textInputTag = document.getElementById(`edit-comment-input-${id}`);
	commentsArray.forEach((e) => {
		if (e.id === id) {
			e.content = textInputTag.value;
		}
		e.replies.forEach((r) => {
			if (r.id === id) {
				r.content = textInputTag.value;
			}
		});
	});
	let item = null;

	const recur = (a) => {
		for (let i = 0; i < a.length; i++) {
			if (a[i].id === id) {
				item = a[i];
				a[i].content = textInputTag.value;

				break;
			}
		}
		if (!item) {
			for (let i = 0; i < a.length; i++) {
				recur(a[i].replies);
			}
		}
	};

	recur(commentsArray);

	const editWrapTag = document.getElementById(`edit-comment-wrap-${id}`);
	editWrapTag.classList.remove("show");
	const pTag = document.getElementById(`comment-${id}`);
	pTag.classList.add("show");
	redraw();
};

const handleReplyClick = (id) => {
	const replyInputContainer = document.getElementById(
		`reply-input-container-${id}`
	);
	let content = ` <div class="add-comment-container" id="reply-input-container-${id}" style="grid-column: 1 / span 11">
				<textarea
					name=""
					id="reply-input-${id}"
					rows="4"
					placeholder="Add a comment"
				></textarea>
				<img src="./images/avatars/image-amyrobson.png" alt="" />
				<div class="send" onclick="handleReplyInputClick(${id})">REPLY</div>
			</div>`;
	replyInputContainer.innerHTML = content;
};

const handleReplyInputClick = (id) => {
	const textInputTag = document.getElementById(`reply-input-${id}`);
	createNewComment(id, textInputTag.value, getNewId());

	const replyInputContainer = document.getElementById(
		`reply-input-container-${id}`
	);
	replyInputContainer.innerHTML = "";
	// redraw();
};

const handleSendClick = () => {
	const inputTag = document.getElementById("send-input");
	const newId = getNewId();
	createNewComment(null, inputTag.value, newId);
	inputTag.value = "";
};

let newId = 5;
const getNewId = (a) => {
	let k = newId;
	newId++;
	return k;
};
const redraw = () => {
	init(commentsArray);
	generateReplies(commentsArray);
};
const createNewComment = (replyToID, c, id) => {
	const newComment = {
		id,
		content: c,
		createdAt: "just now",
		score: 0,
		user: currentUser,
		replies: [],
	};
	if (replyToID !== null) {
		let checkout = false;
		for (let i = 0; i < commentsArray.length; i++) {
			if (checkout) break;
			// console.log("chk1");
			if (commentsArray[i].id === replyToID) {
				// console.log("found1");
				commentsArray[i].replies.unshift(newComment);
				break;
			}
			for (let i2 = 0; i2 < commentsArray[i].replies.length; i2++) {
				// console.log("chk2");
				if (commentsArray[i].replies[i2].id === replyToID) {
					if (!commentsArray[i].replies[i2].replies) {
						commentsArray[i].replies[i2].replies = [];
					}
					commentsArray[i].replies[i2].replies.unshift(
						newComment
					);
					checkout = true;
					break;
				}
			}
		}
	} else {
		commentsArray.push(newComment);
	}
	redraw();
};

const updateScore = (dir, id) => {
	const scoreTag = document.getElementById(`score-${id}`);
	let score = parseInt(scoreTag.textContent) || 0;
	if (dir === "up") score += 1;
	if (dir === "down") score -= 1;
	if (score < 1) score = 0;
	// scoreTag.innerText = score;
	commentsArray.forEach((e) => {
		if (e.id === id) {
			e.score = score;
			return;
		}
		e.replies.forEach((r) => {
			if (r.id === id) {
				r.score = score;
				return;
			}
		});
	});
	redraw();
};

const generateComment = (c) => {
	return `	<div class="item" id=${c.id}>
     <div class="comment-container">
          <div class="profile-wrap">
               <img
                    src=${c.user.image.png}
                    alt=""
               />
               <div class="name">${c.user.username}</div>
           ${
				currentUser.username === c.user.username
					? `<div class="you">you</div>`
					: ""
			}
               <div class="time">${c.createdAt}</div>
          </div>
          <p class="comment show" id="comment-${c.id}">
              
               ${c.replyingTo ? `<span>@maxblagun1</span>` : ""}
               ${c.content}
          </p>
          <div class="edit-comment-wrap " id="edit-comment-wrap-${c.id}">
               <textarea
                    name=""
                    id="edit-comment-input-${c.id}"
                    rows="4"
                    placeholder="Add a comment"
               ></textarea>
               <div class="send" onclick="handleUpdateClick(${
				c.id
			})">UPDATE</div>
          </div>
          <!-- <div class="mobile-footer-wrap"> -->
          <div class="counter-wrap">
               <img src="./images/icon-plus.svg" alt="" onclick="updateScore('up', ${
				c.id
			})"/>
               <div class="count" id="score-${c.id}">${c.score}</div>
               <img src="./images/icon-minus.svg" alt="" onclick="updateScore('down', ${
				c.id
			})" />
          </div>
          ${
			c.user.username !== currentUser.username
				? `<div class="reply-wrap show" onclick="handleReplyClick(${c.id})">
               <img src="./images/icon-reply.svg" alt="" />
               <div class="reply">Reply</div>
          </div>`
				: ""
		}
         ${
			c.user.username === currentUser.username
				? `<div class="edit-wrap show">
               <div class="" onclick="handleDeleteClick(${c.id})">
                    <img src="./images/icon-delete.svg" alt="" />
                    <div class="edit-delete">Delete</div>
               </div>
               <div class=""  onclick="handleEditClick(${c.id})">
                    <img src="./images/icon-edit.svg" alt="" />
                    <div class="edit">Edit</div>
               </div>
          </div>`
				: ""
		}
          <!-- </div> -->
     </div>
     <div class="all-replies-container" id="reply-input-container-${c.id}">
     
     </div>
     <div class="all-replies-container" id="reply-container-${c.id}">
     
     </div>
     </div>`;
};

const generateReplies = (a) => {
	a.forEach((c) => {
		if (!c.replies.length > 0) {
			return;
		}
		let replyContent = "";
		c.replies.forEach((e) => {
			replyContent += generateComment(e);
			// generateReplies(e.replies);
		});
		const replyContainer = document.getElementById(
			`reply-container-${c.id}`
		);

		if (!replyContainer) {
			console.log(
				"reply container NOT FOUND>>>>>>>>>>>>>>>>>>>>>>>>>"
			);
		}

		replyContainer.innerHTML = replyContent;
	});

	a.forEach((c) => {
		generateReplies(c.replies);
		return;
	});
};

let commentContainer = document.getElementById("all-comments-container");
const init = (a) => {
	let innerHTMLContent = "";
	a.forEach((e) => {
		innerHTMLContent += generateComment(e);
	});
	commentContainer.innerHTML = innerHTMLContent;
};
init(commentsArray);
generateReplies(commentsArray);

// end script----delete below
