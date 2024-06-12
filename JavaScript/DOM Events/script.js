var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");



function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	
	ul.appendChild(li);
	var deleteBtn = document.createElement("button");
	deleteBtn.textContent = "Delete";
	deleteBtn.className = 'delete-btn';
	deleteBtn.addEventListener("click", function(e) {
		var listItem = e.target.parentElement;
		ul.removeChild(listItem);
	});
	li.appendChild(deleteBtn);
	li.addEventListener('click', toggleDone);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}



function toggleDone(event) {
	if (event.target && event.target.matches('.delete-btn')) {
		console.log("?????");
	} else {
	event.target.classList.toggle('done');
}
}

function addDeleteBtn() {
	

}

// must iterate through all list items to add the event listner
// add delete button and event listner to li items already on the page
for (let i = 0; i < listItems.length; i++) {
	var deleteBtn = document.createElement("button");
	deleteBtn.textContent = "Delete";
	deleteBtn.className = 'delete-btn';
	deleteBtn.addEventListener("click", function(e) {
		var listItem = e.target.parentElement;
		ul.removeChild(listItem);
	})
	listItems[i].appendChild(deleteBtn);

	listItems[i].addEventListener('click', toggleDone);	
}

button.addEventListener("click", addListAfterClick);
// this will not work due to multiple list items, must iterate and utilize index
// listItems.addEventListener("click", toggleDone);
input.addEventListener("keypress", addListAfterKeypress);



// dynamic rendering
// cache the element into a variable create or selected
// add the text content for what is being created
// append child to render to page
// must iterate through the array of items if adding multiple event listeners or creating multiple elements


// caching the delete button in a global variable did not work for this
// the delete btn variable 