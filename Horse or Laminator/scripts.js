function rng() {
	const choiceArray = ["horse", "laminator"];
	const choiceRng = choiceArray[(choiceArray.length * Math.random()) | 0];
	return choiceRng;
}

function buttonClick(clicked_id) {
	let button = document.getElementById(clicked_id);
	console.log(clicked_id);
	return button;
}
