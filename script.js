/* Create the divs using JavaScript. 
Don’t try to create them by hand by copying and pasting them in your HTML file!
*/
var div = document.createElement("div");
div.style.width = "16px";
div.style.height = "16px";
div.style.background = "grey";
div.style.color = "black";
div.innerHTML = "EtchASketch";

document.getElementsById("main").appendChild(div);