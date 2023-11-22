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

//localStorage.setItem("todoList", JSON.stringify(todoLists));


// Skapar todo-listan
function todoFunction() {
todosUl.innerHTML = "";
todoLists.forEach((todo, i) => {
  const li = document.createElement("li");
  li.className = "lilist";
  li.innerText = todo.todoname;

  todosUl.appendChild(li);

  li.addEventListener("click", () => {
    newList.push(todo);
    todoLists.splice(i,1)
    createTodoHtml();
    todoFunction();
    
    //todoFunction();
    //todosUl.removeChild(li);
  
  });

});
}

const doneUl = document.getElementById("doneList");

todoFunction();

//  skapar klar-listan
const createTodoHtml = () => {
  doneUl.innerHTML = "";
  
  newList.forEach((todoItem,i) => {
    const li = document.createElement("li");
    li.className = "lilist2";
    li.innerText = todoItem.todoname;
    doneUl.appendChild(li);
    
    li.addEventListener("click", () => {
      todoLists.push(todoItem);
      newList.splice(i,1);
      createTodoHtml();
      todoFunction();
      /*localStorage.setItem("todoList", JSON.stringify(todoLists)); */

    });
    doneUl.appendChild(li);
  });
};

addNewTodo();
function addNewTodo() {
  const todoForm = document.getElementById("formtodo");
  const inputTodo = document.getElementById("todo");
  
  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newTodoText = inputTodo.value;
    const newTodo = new Todo(newTodoText);

    const li = document.createElement("li");
    li.className = "lilist3";
    li.innerHTML = newTodoText;

    todosUl.appendChild(li);
    todoLists.push(newTodo);

    createTodoHtml();
    todoFunction();
    
    inputTodo.value = "";

  });
}



