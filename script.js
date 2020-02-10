var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector(".notes");


// Function to store the user

function inputLength() {
	return input.value.length;
}

//Create List Element with Delete Button

function createListElement() {

	//First create the list item with the user input and append to the existing list
	var newLi = document.createElement("li");
	newLi.appendChild(document.createTextNode(input.value));
	ul.appendChild(newLi);
	input.value = "";

	//Add checkbox to toggle class
	var newCheckBox = document.createElement("input");
	newCheckBox.type = "checkbox";
	newCheckBox.className += "complete";
	newLi.appendChild(newCheckBox)

	//And add new Delete Button with "Text" and "class" 
	var newDeleteButton = document.createElement("button");
	newDeleteButton.textContent = "X";
	newDeleteButton.className += "delete";
	newLi.appendChild(newDeleteButton)
	
	}

// add List item functions		

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(e) {
	if (inputLength() > 0 && e.keyCode === 13) {
		createListElement();
	}
}

//Checkbox to strike completed

function addToggle (e){
	if (e.target.matches(".complete")) {
		!e.target.parentNode.classList.toggle("done")
		}
	}

// Delete Button function	

function removeList (e){
	if (e.target.matches(".delete") ){
		 e.target.parentNode.remove();
	}
}
			

//Function callbacks

ul.addEventListener("change", addToggle);

ul.addEventListener("click", removeList);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress); 