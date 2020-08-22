function resCompute(resId, formId) {
	const form = document.getElementById(formId);
	let res = document.getElementById(resId);

	// Define input and correct values
	if (formId === 'form1') {
		// Input Values
		var inputOne = document.getElementById('f1').value;
		var inputTwo = document.getElementById('f2').value;
		var inputThree = document.getElementById('f3').value;

		var inputFour = document.getElementById('f4').value;
		var inputFive = document.getElementById('f5').value;
		var inputSix = document.getElementById('f6').value;

		// Target Values
		var correctOne = "へええ";
		var correctTwo = "おゆう";
		var correctThree = "あうよ";

		var correctFour = "ほうほう";
		var correctFive = "やゆよ";
		var correctSix = "よう";
	} else if (formId === 'form2') {
		// Input Values
		var inputOne = document.getElementById('f7').value;
		var inputTwo = document.getElementById('f8').value;
		var inputThree = document.getElementById('f9').value;

		var inputFour = document.getElementById('f10').value;
		var inputFive = document.getElementById('f11').value;
		var inputSix = document.getElementById('f12').value;

		// Target Values
		var correctOne = "かたいです";
		var correctTwo = "やすいんだ";
		var correctThree = "いいながら";

		var correctFour = "かんたんわよ";
		var correctFive = "ろせんですか";
		var correctSix = "にわだよ";
	} else if (formId === 'form3') {
		// Input Values
		var inputOne = document.getElementById('f13').value;
		var inputTwo = document.getElementById('f14').value;
		var inputThree = document.getElementById('f15').value;

		var inputFour = document.getElementById('f16').value;
		var inputFive = document.getElementById('f17').value;
		var inputSix = document.getElementById('f18').value;

		var inputSeven = document.getElementById('f19').value;
		var inputEight = document.getElementById('f20').value;
		var inputNine = document.getElementById('f21').value;
		
		var inputTen = document.getElementById('f22').value;
		var inputEleven = document.getElementById('f23').value;
		var inputTwelve = document.getElementById('f24').value;

		// Target Values
		var correctOne = "なかまだよ。";
		var correctTwo = "りかがすき";
		var correctThree = "はなれて";

		var correctFour = "はしれ";
		var correctFive = "あかないで";
		var correctSix = "いけませんよ";

		var correctSeven = "なんだろう";
		var correctEight = "けいと";
		var correctNine = "くまのはながいい";

		var correctTen = "うえはらえき";
		var correctEleven = "とうきょう";
		var correctTwelve = "よよぎ";
	} else if (formId === 'form4') {
		// Input Values
		var inputOne = document.getElementById('f25').value;
		var inputTwo = document.getElementById('f26').value;
		var inputThree = document.getElementById('f27').value;

		var inputFour = document.getElementById('f28').value;
		var inputFive = document.getElementById('f29').value;
		var inputSix = document.getElementById('f30').value;

		// Target Values
		var correctOne = "ひつよう";
		var correctTwo = "さっそく";
		var correctThree = "ひっこしをする";

		var correctFour = "こどものめ";
		var correctFive = "ねること";
		var correctSix = "かこむ";
	}

	// Put input and correct values into an array
	if (formId !== 'form3') {
		var inputVals = [inputOne, inputTwo, inputThree, inputFour, inputFive, inputSix];
		
		var correctVals = [correctOne, correctTwo, correctThree, correctFour, correctFive, correctSix];
	} else if (formId === 'form3') {
		var inputVals = [inputOne, inputTwo, inputThree, inputFour, inputFive, inputSix, inputSeven, inputEight, inputNine, inputTen, inputEleven, inputTwelve];

		var correctVals = [correctOne, correctTwo, correctThree, correctFour, correctFive, correctSix, correctSeven, correctEight, correctNine, correctTen, correctEleven, correctTwelve];
	}

	// Convert values to a JSON string
	strInput = JSON.stringify(inputVals);
	strCorrect = JSON.stringify(correctVals);
	result = strInput === strCorrect;

	// Write result in a readable form
	if (result) {
		var result_readable = "Correct! Well done.";
		res.style.color = '#0F0';
	} else {
		var result_readable = "Incorrect! Try Again.";
		res.style.color = '#F00';
	}

	res.innerHTML = result_readable;
	return false;
}
