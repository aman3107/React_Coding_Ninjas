const div = document.createElement("div");

const heading = document.createElement("h1");
heading.className = "header";
heading.textContent = "Hello";

const para = document.createElement("p");
para.textContent = "Welcome to the session";

const button = document.createElement("button");
button.textContent = "Click";

div.append(heading);
div.append(para);
div.append(button);

document.getElementById("root").append(div);
