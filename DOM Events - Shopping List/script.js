var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li")
var deleteButtons = document.querySelectorAll("button.delete");
//var test = document.getElementById("testButton");

function crossOffAfterClick(event) {
	event.target.classList.toggle("done");
}

function deleteItem(event) {
	li = event.target.parentNode;
	li.parentNode.removeChild(li);
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var listItem = document.createElement("li");
	var span = document.createElement("span");
	var deleteButton = document.createElement("button");

	span.classList.add("text");
	span.addEventListener("click", crossOffAfterClick);
	span.appendChild(document.createTextNode(input.value));

	deleteButton.classList.add("delete");
	deleteButton.addEventListener("click", deleteItem);
	deleteButton.appendChild(document.createTextNode("Delete"));

	listItem.appendChild(span);
	listItem.appendChild(document.createTextNode(" "));
	listItem.appendChild(deleteButton)
	ul.appendChild(listItem);
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

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

li.forEach(function(item) {
	itemText = item.querySelector("span.text");
	itemText.addEventListener("click", crossOffAfterClick);
});

deleteButtons.forEach(function(deleteButton) {
	deleteButton.addEventListener("click", deleteItem);
});