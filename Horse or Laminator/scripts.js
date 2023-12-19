function rng() {
	const choiceArray = ["horse", "laminator"];
	const choiceRng = choiceArray[(choiceArray.length * Math.random()) | 0];
	return choiceRng;
}


