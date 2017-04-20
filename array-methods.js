var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
var output = document.getElementById("planets");
/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
planets.forEach(function(event){
	output.innerHTML += `<p>${event}</p>`;
});

// Use the map method to create a new array where the first letter of each planet is capitalized
planets.map(function(event){
	var upper= event.charAt(0).toUpperCase()+event.slice(1);
	console.log(upper);
});

// Use the filter method to create a new array that contains planets with the letter 'e'
var output2 = document.getElementById("planets1");
function planetE(event){
	if(event.indexOf('e')>=0){
		output2.innerHTML+= 
		`<p>${event}</p>`;
	}
};
planets.filter(planetE);
// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
var output3 = document.getElementById("planets2");
function buildSentence(index,word){

	return index + " " + word;
};
output3.innerHTML=words.reduce(buildSentence);