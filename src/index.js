import "./index.sass";
import createButton from "./components/button";
import colorElement from "./components/colorElement";

const div = document.createElement("div");
div.innerText = "Hello World";
div.style.color = "red";

const button = createButton("HEY FIRST BUTTON YO!");

button.addEventListener("click", e => {
  colorElement(div, "cyan");
});

document.body.appendChild(button);
document.body.appendChild(div);
