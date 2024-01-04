function buttonClick(clickedButton) {
	function innerButton() {
		const choice = clickedButton;
		function rng() {
			let counter = 0;
			const choiceArray = ["horse", "laminator"];
			const choiceRng = choiceArray[(choiceArray.length * Math.random()) | 0];
			if (choice === choiceRng) {
				return true;
			} else return false;
		}
		return rng();
	}
	return innerButton();
}

buttonClick("horse");
console.log(buttonClick("horse"));
buttonClick("horse");
buttonClick("laminator");

// const horseButtonObject = document.getElementById("horse");
// const horseButton = horseButtonObject.id;
// buttonClick(horseButton);

//const selectedButton = buttonClick(document.getElementById("horse"));
//console.log(selectedButton);

function rng() {
	const choiceArray = ["horse", "laminator"];
	const choiceRng = choiceArray[(choiceArray.length * Math.random()) | 0];
	return choiceRng;
}
// const rngFunc = rng();
// console.log(rngFunc);

// const answerChecker = (rngFunc, selectedButton) => {
// 	//console.log(rngFunc, selectedButton);
// };

// answerChecker(rngFunc, selectedButton);
