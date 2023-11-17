import "./css/style.css";

const divTag = document.createElement("div");
divTag.id = "container";
document.body.appendChild(divTag);

const rubrik = document.createElement("h1");
rubrik.id = "rubrik";
rubrik.textContent = "Idag har jag";
divTag.appendChild(rubrik);

const myTodo = ["Handlat", "Städat", "Tvättat", "Tränat", "Pluggat"];

const myTodoJSON = JSON.stringify(myTodo);

const ul = document.createElement("ul");
ul.id = "theList";
divTag.appendChild(ul);

for (let i = 0; i < myTodo.length; i++) {
  const li = document.createElement("li");
  li.textContent = myTodo[i];
  ul.appendChild(li);

  li.addEventListener("click", function () {
    console.log("Du klickade på:" + myTodo[i]);
  });
}

const img = document.createElement("img");
img.src =
  "https://th.bing.com/th/id/OIP.8FOf0YBIIYWm4qzWry9POQAAAA?rs=1&pid=ImgDetMain";
img.alt = "todo picture";

divTag.appendChild(img);

console.log("JSON-sträng:", myTodoJSON);