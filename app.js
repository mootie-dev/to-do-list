// Selectores //
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listener //
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// Funciones //
function addTodo(event) {
  // Evita que el formulario se envíe //
  event.preventDefault();
  // To-Do DIV //
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // Creando elementos LI //
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  // Boton de Check //
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  // Boton de Eliminar //
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  // Añadir a la lista //
  todoList.appendChild(todoDiv);
  // Limpiar el Input //
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  // Borrar //
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }

  // Check //
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
