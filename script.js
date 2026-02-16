function ShowDate() {
  document.getElementById("demo").innerHTML = Date();
}
function Show() {
  document.getElementById("showmessage").innerHTML = "Hello World";
}
function activate() {
  document.getElementById("picture-lamp").src = "img/pic_bulbon.gif";
}
function deactivate() {
  document.getElementById("picture-lamp").src = "img/pic_bulboff.gif";
}
function changefont() {
  document.getElementById("change-fontsize").style.fontSize = "40px";
}
function hidetext() {
  document.getElementById("hide-text").style.display = "none";
}
function showtext() {
  document.getElementById("show-text").style.display = "block";
}
// window.alert ("Hello There!");  
{
let x = 5;
console.log(x);
console.log([1, 2, 3]);
console.log({a:1, b:2});
}

function sorttext() {
  let x = 1;
  const fname = "David";
  document.getElementsByClassName("text-yn")[0].innerHTML = 
  fname + " is " + x + " years " + " old ";
}
sorttext();

function value() {
  let x, y, z;
  x = 7;
  y = 3;
  z = x * y;
  document.getElementsByClassName("text-value")[0].innerHTML =
  "The value of z is " + z;
}
value();

function Sns() {
}
Sns();

