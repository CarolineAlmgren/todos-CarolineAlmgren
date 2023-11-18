import "./css/style.css";

/*const divTag = document.createElement("div");
divTag.id = "container";
document.body.appendChild(divTag);

const rubrik = document.createElement("h1");
rubrik.id = "rubrik";
rubrik.textContent = "Idag har jag";
divTag.appendChild(rubrik);

const myTodo = ["Handlat", "Städat", "Tvättat", "Tränat", "Pluggat"];
const removeTodo = [];

const myTodoJSON = JSON.stringify(myTodo);

const ul = document.createElement("ul");
ul.id = "theList";
divTag.appendChild(ul);

for (let i = 0; i < myTodo.length; i++) {
  const li = document.createElement("li");
  li.textContent = myTodo[i];
  ul.appendChild(li);

  li.addEventListener("click", function () {
   removeTodo.push(myTodo);
   console.log(removeTodo);
  
  });

}

const img = document.createElement("img");
img.src =
  "https://th.bing.com/th/id/OIP.8FOf0YBIIYWm4qzWry9POQAAAA?rs=1&pid=ImgDetMain";
img.alt = "todo picture";

divTag.appendChild(img);

console.log("JSON-sträng:", myTodoJSON);*/


/*const myTodoList = ["Handlat", "Städat", "Tvättat", "Tränat", "Pluggat"];
const removeTodo = [];

const todoContainer = document.querySelector("section#todolist");

myTodoList.forEach((myTodo) => {
  const divTag = document.createElement("div");
  divTag.id = "container";
  const rubrik = document.createElement("h1");
  rubrik.id = "rubrik";
  const list = document.createElement("ul");
  list.id = "theList";
  const todo = document.createElement("li");
  
  rubrik.innerHTML = myTodo;
  todoContainer.className = "todo";
  todoContainer.addEventListener("click" , () => {
      removeTodo.push(myTodo);
  console.log(removeTodo);
  create

});

document.body.appendChild(divTag);
divTag.appendChild(rubrik);
divTag.appendChild(list);
list.appendChild(todo);

});*/

const divTag = document.createElement("div");
divTag.id = "container";
document.body.appendChild(divTag);

const rubrik = document.createElement("h1");
rubrik.id = "rubrik";
rubrik.textContent = "Idag har jag";
divTag.appendChild(rubrik);

const myTodo = ["Handlat", "Städat", "Tvättat", "Tränat", "Pluggat"];

const ul = document.createElement("ul");
ul.id = "theList";
divTag.appendChild(ul);

function removeTodo(e) {
const li = e.currentTarget;
li.classList = "done";


setTimeout(function () {
ul.removeChild(li);
  }, 200); 
}

myTodo.forEach(function (todo) {
const li = document.createElement("li");
 li.textContent = todo;
 ul.appendChild(li);

li.addEventListener("click", removeTodo);
});

const img = document.createElement("img");
img.src =
  "https://media.istockphoto.com/photos/to-do-list-picture-id504647866?k=6&m=504647866&s=612x612&w=0&h=H0IvNmVPX_Aum4pdJzeOpkIdWN15jiLaaxxiwxXOyPs=";
img.alt = "todo picture";

divTag.appendChild(img);


