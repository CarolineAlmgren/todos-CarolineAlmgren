import "./css/style.scss";
import { Todo } from "./class";

const a = new Todo("Handlat");
const b = new Todo("Städat");
const c = new Todo("Tvättat");
const d = new Todo("Tränat");
const e = new Todo("Pluggat");
const f = new Todo("Vattnat");

const todoLists = [a, b, c, d, e, f];
const newList = [];

const todosUl = document.getElementById("theList");

localStorage.setItem("todoList", JSON.stringify(todoLists));

todoLists.forEach((event) => {
  const li = document.createElement("li");
  li.className = "lilist";
  li.innerText = event.todoname;

  todosUl.appendChild(li);

  li.addEventListener("click", () => {
    newList.push(event);
    createTodoHtml();

    todosUl.removeChild(li);

  });

});


const doneUl = document.getElementById("doneList");
const createTodoHtml = () => {
  doneUl.innerHTML = "";

  newList.forEach((todoItem) => {
    const li = document.createElement("li");
    li.className = "lilist2";
    li.innerText = todoItem.todoname;
    doneUl.appendChild(li);

    li.addEventListener("click", () => {
      todoLists.push(todoItem);
      createTodoHtml();
      todosUl.removeChild(li);
      todoLists.splice(index, 1);

    });
    doneUl.appendChild(li);
  });
};

const formTodo = document.getElementById("formtodo");
const inputTodo = document.getElementById("todo");

formTodo.addEventListener("submit", function (event) {
  event.preventDefault();

  const newTodoText = inputTodo.value;
  const newTodo = new Todo(newTodoText);

  inputTodo.value = "";
 todoLists.push(newTodo);

 
});



