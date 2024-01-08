let counter = 0;
const highScores = [];

const counterValue = document.getElementById("counter-value");
const highScoreValue = document.getElementById("highscore-value");

function buttonClick(clickedButton) {
	function innerButton() {
		const choice = clickedButton;
		function rng() {
			const choiceArray = ["horse", "laminator"];
			const choiceRng = choiceArray[(choiceArray.length * Math.random()) | 0];
			if (choice === choiceRng) {
				counter++;
				counterValue.innerHTML = counter;
				highScores.push(counter);
				highScoreValue.innerHTML = Math.max(...highScores);
			} else counter = 0;
			counterValue.innerHTML = counter;
			return counter;
		}
		return rng();
	}
	return innerButton();
}
