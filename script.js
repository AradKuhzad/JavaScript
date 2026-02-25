function ShowDate() {
  document.getElementById("demo").innerHTML = Date();
}
function Show() {
  document.getElementById("showmessage").innerHTML = "Hello World";
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
  let person = "James", carName = "Mercedes", age = "25";
  document.getElementById("doe-Specifications").innerHTML = 
  carName
}
Sns();

function xyzepl() {
  let carName = "Volvo";
  const fname = "Dan";
  const Lname = "Murphy";
  let carcolor = "black";
  console.log(fname + Lname);
  document.getElementById("Dan-car").innerHTML =
  carName;
}
xyzepl();

function cnt() {
  const User = {name: "Dan"};
  User.name = "James";
  console.log(User.name);
  const cars = ["Fiat", "BMW", "Mercedes"]; 
  cars[1] = "Volvo";
  cars.push("Toyota");
  console.log(cars);
}
cnt();


function OPors() {
  let x = 4;
  let y = 5;
  console.log(x + y);
  console.log(x * y);
  console.log(x / y);
  console.log(x - y);
  console.log(++x);
  console.log(--y);
  console.log(x ** y);
  console.log(x % y);
  console.log(x *= 5);
  console.log(y -= 1);
  console.log(x += 3);
  console.log(x == y);
  console.log(x);
  console.log(y);
  console.log(x != y);
  console.log(x > y);
  console.log(x <= y);
  console.log(x >= y);
  console.log(x < y);
}
OPors();


function checkAgeCategory() {
  let age = parseInt(document.getElementById("ageInput").value);
  let Category = "";
  if (age >= 0 && age <= 12) {
    Category = "Early years";
  }
  else if (age >= 13 && age <= 18) {
    Category = "Youth";
  } 
  else if (age >= 19 && age <= 64) {
    Category = "Adults";
  }
  else if (age >= 65 && age <= 109) {
    Category = "Older age";
  }
  else if (age >= 110) {
    Category = "Are you even alive?";
  }
  else {
    Category = "Your age is invalid!";
  }
  document.getElementById("result").innerHTML = 
  Category;
}

function exle() {
  let x = 17;
  let text = (x >= 18) ? "Hi" : "Bye";
  console.log(text);
}
exle();

function Dateday() {
  let day;
  let date = new Date().getDay();
  switch (date) {
    case 0:
    day = "Sunday";
    break;
    case 1:
    day = "Monday";
    break;
    case 2:
    day = "Tuesday";
    break;
    case 3:
    day = "Wednesday";
    break;
    case 4:
    day = "Thursday";
    break;
    case 5:
    day = "Friday";
    break;
    case 6:
    day = "Saturday";
    break;
  }
  document.getElementById("Date").innerHTML = 
  "Today is " + day;
}
Dateday();


function Changepicture() {
  let img = document.getElementById("picture-lamp");
  if (img.src.includes("pic_bulboff.gif")) {
    img.src = "img/pic_bulbon.gif";
  }
  else {
    img.src = "img/pic_bulboff.gif";
  }
}

function Changepicture2() {
  const img = document.getElementById("picture-lamp");
  const slider = document.getElementById("brightnessSlider");
  slider.addEventListener("input", () => {
    img.style.filter = `brightness(${slider.value}%)`;
  });
}
Changepicture2();

function Changepicturebutton() {
  let img = document.getElementById("picture-lamp");
  let text = document.getElementById("text-Clicktuof");
  if (img.src.includes("pic_bulboff.gif")) {
    img.src = "img/pic_bulbon.gif";
    "Click to turn off the light.";
    text.classList.remove("off");
    text.classList.add("on");
    
  }
  else {
    img.src = "img/pic_bulboff.gif";
    document.getElementById("text-Clicktuof").innerHTML = 
    "Click to turn on the light.";
    text.classList.remove("on");
    text.classList.add("off");
  }
}