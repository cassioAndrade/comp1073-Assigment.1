// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak

var speakButton1 = document.querySelector('#nounButton');
var nounList1 = ['Mom', 'Dad', 'My brother', 'My sister', 'My cat', 'My dog', 'My turtle', 'My aunt'];

var speakButton2 = document.querySelector('#verbButton');
var verbList = ['farted like', 'smiles like', 'jumped like', 'cried like', 'laughed like', 'screams like', 'sings like', 'looks like'];

var speakButton3 = document.querySelector('#adjeButton');
var adjeList = ['a donkey', 'a parrot', 'a goofy', 'a ventriloquist', 'a baby', 'a thug', 'a clown', 'a witch'];

var speakButton4 = document.querySelector('#nounButton2');
var nounList2 = ['with a scarf', 'with high heels', 'with a banana', 'with a microphone', 'with a megaphone', 'with a hula hoop', 'with makeup', 'with torn pants'];

var speakButton5 = document.querySelector('#settButton');
var settList = ['on the beach', 'on the stage', 'in the theater', 'on the street', 'at work', 'on the market', 'in the kitchen', 'in bed'];

//declaring variable for read the story button
var speakButton6 = document.querySelector('#readButton');

//declaring variable for random story button
var speakButton7 = document.querySelector('#randomButton');

//declaring the sentence array for the Read the story button 
 var sentence =new Array(); 
/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

//rando value from the array
function randomValueFromArray(array){
	return array[Math.floor(Math.random()*array.length)];

}


/* Event Listeners
-------------------------------------------------- */
//function to make speak buttonNoun1
speakButton1.onclick = function() {
	//select random string from buttonNoun1
	 var noun1= randomValueFromArray(nounList1);
	speakNow(noun1);	
	console.log(noun1);     //dispalying to console
	 sentence[0] =  noun1;    //select the array
		
}


speakButton2.onclick = function() {
	//select random string from buttonVerb
	 var verb= randomValueFromArray(verbList);
	speakNow(verb);	
	console.log(verb);     //dispalying to console
	 sentence[1] =  verb;    //select the array
		
}
speakButton3.onclick = function() {
	 var adje= randomValueFromArray(adjeList);
	speakNow(adje);	
	console.log(adje);    
	 sentence[2] =  adje;    
		
}
speakButton4.onclick = function() {
	 var noun2= randomValueFromArray(nounList2);
	speakNow(noun2);	
	console.log(noun2);    
	 sentence[3] =  noun2;    
		
}
speakButton5.onclick = function() {
	 var sett= randomValueFromArray(settList);
	speakNow(sett);	
	console.log(sett);    
	 sentence[4] =  sett;    
		
}
speakButton6.onclick = function() {
	console.log(sentence);     //dispalying to console
	speakNow(sentence);   
	sentence = [];        //emptying the sentence array
}


//declaring random sentance array
var randomSentence = new Array();

speakButton7.onclick = function() {

	//adding randon value from the texttoSpeak array to randomSentence array
randomSentence[0] = randomValueFromArray(nounList1);
randomSentence[1] = randomValueFromArray(verbList);
randomSentence[2] = randomValueFromArray(adjeList);
randomSentence[3] = randomValueFromArray(nounList2);
randomSentence[4] = randomValueFromArray(settList);
	console.log(randomSentence);      //dispalying to console
	speakNow(randomSentence);
	}
	
  randomSentence = [];     //emptying randomSentence array
