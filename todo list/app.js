//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const userTodo = document.querySelector(".user-todo");
// prompt user to enter their name for the todo list
let userName = prompt("please enter your name");
userTodo.innerText = userName + "'s to do List";
//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
// Functions
function addTodo(event) {
	//prevent form from submiting
	event.preventDefault();
	// create a to do div
	const todoDiv = document.createElement("div");
	// classlist to style in css
	todoDiv.classList.add("todo");
	//create li
	const newTodo = document.createElement("li");
	// get the input form value
	newTodo.innerText = todoInput.value;
	newTodo.classList.add("todo-item");
	todoDiv.appendChild(newTodo);
	//complete button
	const completedButton = document.createElement("button");
	completedButton.innerHTML = '<i class="fas fa-check"></i>';
	completedButton.classList.add("completed-button");

	todoDiv.appendChild(completedButton);
	// trash button
	const trashButton = document.createElement("button");
	trashButton.innerHTML = '<i class="fas fa-trash"></i>';
	trashButton.classList.add("trash-button");
	todoDiv.appendChild(trashButton);
	// appen todo list
	todoList.appendChild(todoDiv);
	// clear to do input value after you hit enter or add button
	todoInput.value = "";
}

function deleteCheck(e) {
	const item = e.target;
	if (item.classList[0] === "trash-button") {
		const todo = item.parentElement;
		todo.remove();
	}

	// mark check as compoleted
	if (item.classList[0] === "completed-button") {
		const todo = item.parentElement;
		todo.classList.toggle("done");
	}
}
