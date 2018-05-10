window.onload = function (){

	var answer = document.getElementById("answer");
	var newWord = document.getElementById("newWord");
	var letters = document.getElementById("letters");
	var guessing = document.getElementById("guessing");
	var hints = document.getElementById("hints");

	var wordArray = ["HOAGIE","LEMON","ELEPHANT","BASKETBALL"];
	var hintArray = ["Philly Sandwich","Something Tart","Giant Footprints","Toss me the Rock"];
	var ran = (Math.floor(Math.random()* wordArray.length));
	var currentWord = wordArray[ran];
	var currentHint = hintArray[ran];
	hints.innerHTML = currentHint;
	var wordToGuess = currentWord.split("");
	var correctGuess =[];
	var wrongGuess =[];
	var remainingLetters = wordToGuess.length;
	var lives = 5;
	
	console.log(wordToGuess);

//Alphabet Section

	var letterArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	var myGuess; 

	for(let i =0;i<letterArray.length;i++){
		var box = document.createElement("div");
		box.setAttribute("class","alphabets")
		box.style.width = "20px";
		box.style.height = "20px";
		box.style.margin = ' 2px';
		box.style.textAlign = 'center';
		box.style.display = "inline-block";
		box.style.backgroundColor = "#42a7f4";
		box.style.border = "2px #f4f141 solid"
		box.innerHTML = letterArray[i]
		letters.appendChild(box)
		box = document.getElementsByClassName('alphabets')
		box[i].addEventListener('click', function(event){
			myGuess = letterArray[i];
			guess();
		})
	}
	

for(var i =0;i<wordToGuess.length;i++){
			var answerBox = document.createElement("div");
			answerBox.setAttribute("class","answerBox");
			answerBox.style.width = "20px";
			answerBox.style.height = "20px";
			answerBox.style.margin = ' 2px';
			answerBox.style.textAlign = 'center';
			answerBox.style.display = "inline-block";
			answerBox.style.backgroundColor = "#42a7f4";
			answerBox.style.border = "2px solid white";
			answerBox.innerHTML = wordToGuess[i];
			answerBox.style.color = "#42a7f4";
			answer.appendChild(answerBox);
			box2 = document.getElementsByClassName('answerBox')

		}
// Guessing Section
	
	function guess(){
		for(let i =0;i<wordToGuess.length;i++){ 
			if(wordToGuess[i] === myGuess){				
				box2[i].style.color = "#f4f141";	
				console.log(true)
				correctGuess.push(myGuess);	
				console.log(correctGuess);
				remainingLetters -= 1;
				console.log(remainingLetters);
				countDown2();
			}	

		}
		if(wordToGuess.indexOf(myGuess) == -1){
				wrongGuess.push(myGuess);
				console.log(wrongGuess + " " + "nope");
				countDown1();
			}
	
	}

	function countDown1(){
		lives -= 1;
		console.log(lives);
		if(lives <=0){
			alert("GAME OVER");
			setTimeout(function(){
				location.reload();
			},2000)
			
		}
		
	}

	function countDown2(){
		if(remainingLetters === 0){
			setTimeout(function(){
				alert("YOU WIN!");
				location.reload();
			},900)

		}
	}

	




	newWord.addEventListener("click",function(){
		currentWord = wordArray[(Math.floor(Math.random()* wordArray.length))];
		wordLetters = currentWord.split("");
		answer.innerHTML = wordLetters;

	})


}









