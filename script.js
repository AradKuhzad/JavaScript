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
  else if (age >= 120) {
    Category = "Your age is invalid!";
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
    document.getElementById("text-Clicktuof").innerHTML = 
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

let offon = 0;
function testswitch1() {
  let lampoff = document.getElementById("picture-lamp");
  switch (offon) {
  case 0:
    lampoff.src = "img/pic_bulbon.gif";
    offon = 1;
    break;
  case 1:
    lampoff.src = "img/pic_bulboff.gif"; 
  offon = 0;
  break;
}
}

function testloop() {
  let i;
  for (let i = 0; i < 5; i++) {
    console.log("Number" + i);
  }
}
testloop();

function squares() {
  let container = document.getElementById("squares");

  for (let i = 0; i < 83; i++) {
    container.innerHTML += `<div class="squares"></div>`;
  }
}
squares();

function squares1() {
  let container = document.getElementById("squares-2");

  for (let i = 0; i < 83; i++) {
    container.innerHTML += `<div class="squares-2"></div>`;
  }
}
squares1();

function squares2() {
  let container = document.getElementById("squares-3");

  for (let i = 0; i < 83; i++) {
    container.innerHTML += `<div class="squares-3"></div>`;
  }
}
squares2();

function squares3() {
  let container = document.getElementById("squares-4");

  for (let i = 0; i < 83; i++) {
    container.innerHTML += `<div class="squares-4"></div>`;
  }
}
squares3();

function squares4() {
  let container = document.getElementById("squares-5");

  for (let i = 0; i < 83; i++) {
    container.innerHTML += `<div class="squares-5"></div>`;
  }
}
squares4();

function squares5() {
  let container = document.getElementById("squares-6");

  for (let i = 0; i < 83; i++) {
    container.innerHTML += `<div class="squares-6"></div>`;
  }
}
squares5();

function practwhile() { 
let repeat = 5;
   while (repeat <= 10) {
      console.log("Hello World!");
      repeat++;
  }
}
practwhile();


function rulertest() {
  let ruler = document.getElementsByClassName("rulerpage")[0];
  let longCol = ruler.querySelector(".column-long");
  let shortCol = ruler.querySelector(".column-short");
  let counter = 1;
  do {
    let longClone = longCol.cloneNode(true);
    let shortClone = shortCol.cloneNode(true);

    ruler.appendChild(longClone);
    ruler.appendChild(shortClone);

    counter++
  } while (counter <= 35);
  let NumRul = document.querySelector(".number-ruler");
  let NumRulvalue = 1;
  do {
    let numberDiv = document.createElement("div");
    numberDiv.classList.add("number-ruler");
    numberDiv.textContent = NumRulvalue;
    NumRul.appendChild(numberDiv);
    NumRulvalue++;
  } while (NumRulvalue <= 9);

  let NumRUl2 = document.querySelector(".number-ruler10-31");
  let NumRulvalue2 = 10;
  do {
    let numberDiv2 = document.createElement("div");
    numberDiv2.classList.add("number-ruler10-31");
    numberDiv2.textContent = NumRulvalue2;
    NumRUl2.appendChild(numberDiv2);
    NumRulvalue2++;
  } while (NumRulvalue2 <= 36);
}
rulertest();


function NumberLoop() {
  for ( let n = 1; n <= 8; n++ ) {
    console.log("Number:" + n)
  }
  let x = 1;
  while ( x <= 3) {
    console.log("Hello");
    x++;
  }
  for ( let b = 0; b <= 10; b++) {
    if (b === 4) {
      break;
    }
    console.log(b);
  }
  console.log("break");
}
NumberLoop();

function Looptestc() {
  for ( let i = 0; i <= 8; i++) {
    if (i % 2 === 0) {
      continue;
    }
    console.log(i);
  }

}
Looptestc();

function looptestCflow() {
  const nums = [3, 7, 8, 1, 9, 2, 4];
  let target = 9;

  for ( let i = 0; i < nums.length; i++) {
    if ( nums[i] === target) {
      console.log( "found it" + nums[i] );
      break;
    }
    else if ( nums[i] % 2 === 0 ) {
      continue;
    }
    console.log( "odd number" + nums[i] );
  }
}
looptestCflow();

function testStrings() {
  //p1 
  let name = "JavaScript";

  console.log(name.length); //essential
  console.log(name[0]);
  console.log(name[name.length-1]);
  console.log(name.toUpperCase()); //essential
  console.log(name.toLowerCase()); //essential
  console.log(name.trim()); //essential
  //p2
  console.log(name.trimStart());
  console.log(name.trimEnd()); 
  console.log(name.slice(0, 5)); //essential
  console.log(name.slice(3)); //essential
  console.log(name.slice(-6)); //essential
  console.log(name.substring(0, 4));
  //p3
  let a = "I've a book and book";
  console.log(a.replace("book", "notebook")); //essential
  console.log(a.replaceAll("book", "notebook")); //essential
  //p4
  let s = "Mango, Apple, Strawberry";
  console.log(s.split("a")); //essential
  console.log(["Mango","Apple"].join("|")); //It's not bad to learn
  console.log(s.split("").reverse().join("")); 
  //p5
  console.log("Hi".padEnd(12, "!")); //It's not bad to learn
  console.log("1".padStart(6)); //It's not bad to learn
  //p6
  let bb = "JavaScript"; 
  console.log(bb.charAt(4)); //It's not bad to learn
  console.log(bb.at(-1)); //It's not bad to learn
  console.log(bb.includes("Jama")); //essential
  console.log(bb.startsWith("J")); //It's not bad to learn
  console.log(bb.endsWith("t")); //It's not bad to learn
  console.log(bb.repeat(2));
}
testStrings();

function testNumbers() {
  console.log(Number.MAX_SAFE_INTEGER);
  console.log(Number.MIN_SAFE_INTEGER);
  console.log(Number.MAX_VALUE);
  console.log(Number.MIN_VALUE);
  console.log(Number.POSITIVE_INFINITY);
  console.log(Number.NEGATIVE_INFINITY);  
  console.log(Number.NaN);
  console.log(Number.EPSILON);
  console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON); //true
  console.log(Number.isInteger(5)); //true
  console.log(Number.isInteger(5.5)); //false
  console.log(isFinite(10)); //true
  console.log(isNaN(NaN)); //true
  console.log(Number.parseInt("42px")); //42
  console.log(Number.parseFloat("3.14m")); //3.14
}
testNumbers();



function testObjects() {
  let person = {
    FirstName: "John",
    LastName: "Doe",
    Age: 30,
    isEmployed: true,
    sayHello: function() {console.log("Hi, My name is " + this.FirstName + " " + this.LastName + " " + "and I'm " + this.Age + " years old")}
};
person.sayHello();
};
testObjects();





