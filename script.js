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
  console.log({ a: 1, b: 2 });
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
  let person = "James",
    carName = "Mercedes",
    age = "25";
  document.getElementById("doe-Specifications").innerHTML = carName;
}
Sns();

function xyzepl() {
  let carName = "Volvo";
  const fname = "Dan";
  const Lname = "Murphy";
  let carcolor = "black";
  console.log(fname + Lname);
  document.getElementById("Dan-car").innerHTML = carName;
}
xyzepl();

function cnt() {
  const User = { name: "Dan" };
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
  console.log((x *= 5));
  console.log((y -= 1));
  console.log((x += 3));
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
  } else if (age >= 13 && age <= 18) {
    Category = "Youth";
  } else if (age >= 19 && age <= 64) {
    Category = "Adults";
  } else if (age >= 65 && age <= 109) {
    Category = "Older age";
  } else if (age >= 120) {
    Category = "Your age is invalid!";
  } else {
    Category = "Your age is invalid!";
  }
  document.getElementById("result").innerHTML = Category;
}

function exle() {
  let x = 17;
  let text = x >= 18 ? "Hi" : "Bye";
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
  document.getElementById("Date").innerHTML = "Today is " + day;
}
Dateday();

function Changepicture() {
  let img = document.getElementById("picture-lamp");
  if (img.src.includes("pic_bulboff.gif")) {
    img.src = "img/pic_bulbon.gif";
  } else {
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
  } else {
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

    counter++;
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
  for (let n = 1; n <= 8; n++) {
    console.log("Number:" + n);
  }
  let x = 1;
  while (x <= 3) {
    console.log("Hello");
    x++;
  }
  for (let b = 0; b <= 10; b++) {
    if (b === 4) {
      break;
    }
    console.log(b);
  }
  console.log("break");
}
NumberLoop();

function Looptestc() {
  for (let i = 0; i <= 8; i++) {
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

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      console.log("found it" + nums[i]);
      break;
    } else if (nums[i] % 2 === 0) {
      continue;
    }
    console.log("odd number" + nums[i]);
  }
}
looptestCflow();

function testStrings() {
  //p1
  let name = "JavaScript";

  console.log(name.length); //essential
  console.log(name[0]);
  console.log(name[name.length - 1]);
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
  console.log(["Mango", "Apple"].join("|")); //It's not bad to learn
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
    sayHello: function () {
      console.log(
        "Hi, My name is " +
          this.FirstName +
          " " +
          this.LastName +
          " " +
          "and I'm " +
          this.Age +
          " years old",
      );
    },
  };
  person.sayHello();
}
testObjects();


function testDates() {
  let now = new Date();
  console.log(now);
  //
  let d1 = new Date("2026-03-23T12:10:00");
  console.log(d1);

}
testDates();


function testTemporal() {
  let date = Temporal.PlainDate.from("2026-03-12");
  console.log(date.year);
  console.log(date.day);
  //
  let next = date.add({days:8});
  console.log(next.day);
  //
  let subt = date.subtract({months:1});
  console.log(subt.month);
  //
  console.log(date.until(next));
} 
testTemporal();

function testArrays() {
  const cars = ["BMW", "Mercedes", "Ford"];
  let addcar = cars[0];
  cars[3] = "Toyota";
  let car1 = cars.at(1);

  console.log(car1);
    //
  const person = ["John", "Doe", 46];
  typeof person;
  console.log(person);
  //
  cars.push("Fiat");
  cars.pop();
  cars.unshift("Volvo");
  cars.shift();
  console.log(cars);
}
testArrays();

function testArrays2() {
  const fruits = ["Bannana", "Apple", "Orange", "Mango", "Pineapple", "Mango"];
  let searchf = fruits.indexOf("Apple") + 1;
  let searchf1 = fruits.lastIndexOf("Mango") + 1;
  let tfsearch = fruits.includes("Bannana");
  let sortf = fruits.toSorted();
  let reversef = fruits.toReversed();
  console.log(searchf);
  console.log(searchf1);
  console.log(tfsearch);
  console.log(sortf);
  console.log(reversef);
}
testArrays2();

function testArrays3() {
  const Numberfv = [1, 5, 7, 12, 22, 26];
  let findArrts = Numberfv.find(thisFunction);
  function thisFunction(value) {
    return value > 21;
  }
  console.log(findArrts);
}
testArrays3();

function testArrays4() {
  const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];
  cars.sort(function(a, b) {
     return a.year - b.year; 
    });
    console.log(cars);
}
testArrays4();

function testArrays5() {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  const numbers = [4, 12, 15, 30, 45, 50];
  const MyArray = [1, 2, 3];
  for (let x of fruits) {
    console.log(x);
  }    
  for (let y in fruits) {
    console.log(y);
  }
  fruits.forEach(function(value) {
    console.log(value);
  });
  const numbers2 = numbers.map(function(value) {
    return value * 2;
  });
  console.log(numbers2);
  console.log(numbers);
  const newArray = MyArray.flatMap(x => [x, x * (20-5)/3]);
  console.log(newArray);
  //
  let reducet = numbers.reduce(function(total, value) {
    return total + value;
  });
  console.log(reducet);
  //
  const numberscheck = [1, 4, 5, 9, 14, 20];
    let lengthcheck = numberscheck.every(function(value) {
      return value < 21;
    });
    console.log(lengthcheck);
    //
    let lengthcheck2 = numberscheck.some(function(value) {
      return value < 0;
    });
    console.log(lengthcheck2);
    
}
testArrays5();

function testArrays6() {
  let text = "ABCDEF";
  let letters = Array.from(text);
  console.log(letters);
  //
   const fruits = ["Banana", "Orange", "Apple", "Mango"]
   const keys = fruits.keys();
  for (let x of keys) {
    console.log(x);
  }
  //
  const entriestest = fruits.entries();
  for (let x of entriestest) {
    console.log(x);
  }
  //
  const months = ["January", "February", "June", "April"];

  const myMonths = months.with(2, "March");

  console.log(months); 
  console.log(myMonths);
  //
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const arr3 = [...arr1, ...arr2];
  console.log(arr1);
  console.log(arr2);
  console.log(arr3);
}
testArrays6();


function Setstest() {
  const A = new Set(['a', 'b', 'c']);
  const B = new Set(['b', 'c', 'd']);

  const union = A.union(B);
  const intersection = A.intersection(B);
  const difference = A.difference(B);
  const symDiff = A.symmetricDifference(B);
  const isSubset = A.isSubsetOf(B);
  const isSuperset = A.isSupersetOf(B);
  const isDisjoint = A.isDisjointFrom(B);

  console.log(union);
  console.log(intersection);
  console.log(difference);
  console.log(symDiff);
  console.log(isSubset);
  console.log(isSuperset);
  console.log(isDisjoint);
}
Setstest();

function Maptest() {
  const mapt = new Map([
    ["Name", "Arad"],
    ["Age", 14],
    ["Country", "Iran"],
    ["Phone-Number", "09123456789"]
  ]);
  mapt.set("Age", 15);
  console.log(mapt);
  console.log(mapt.get("Country"));
  /*
  console.log(mapt.has("Age"));  
  console.log(mapt.delete("Phone-Number"));
  console.log(mapt);
  console.log(mapt.clear());
  console.log(mapt);
  */
  console.log(mapt.size);
}
Maptest();


function Iterationstest() {
  let x = 0;
    return {
      next: function () {
        x += 10;
        if (x > 100) {
        return { value: undefined, done: true };
      }
      return { value: x, done: false};
      },
    };
  }
  const it = Iterationstest();
  console.log(it.next());
  console.log(it.next());


  function Mathtest() {
    console.log(Math.round(4.6));
    console.log(Math.ceil(4.1));
    console.log(Math.floor(4.9));
    console.log(Math.trunc(4.6));
    console.log(Math.pow(6, 2));
    console.log(Math.sqrt(64));
    console.log(Math.abs(-12));
    console.log(Math.min(0, 150, 30, -11));
    console.log(Math.max(0, 150, 30, -11));
    console.log(Math.PI);
    console.log(Math.floor(Math.random() * 10) + 1);
  }
  Mathtest();

  
  function RegExpp() {
    let text = "I'm Arad";
    let n = text.search(/Arad/i);
    console.log(n);
    let companies = "Microsoft";
    let Changec = companies.replace(/Microsoft/i, "Apple");
    console.log(Changec);
    let colors = "red, white, black, yellow, green, purple, gold, grey";
    let result = colors.match(/green|purple|gold/g);
    console.log(result);
  }
  RegExpp();


  function datatypes() {
    let x = 100 / "Apple";
    console.log(isNaN(x));
  }
  datatypes();
  
  function errorstest() {
    const message = document.getElementById("messagebox");
    message.innerHTML = "";
    let x = document.getElementById("inputbox").value;
    try { 
      if(x.trim() == "")  throw "empty";
      if(isNaN(x)) throw "not a number";
      x = Number(x);
      if(x < 5)  throw "too low";
      if(x > 10)   throw "too high";
    } catch(err) {
      message.innerHTML = "Input is " + err;
    }
  }


  function debuggingtest() {
    function add(a, b) {
      let result = a + b;
      return result;
    }
    
    document.getElementById("demo").innerHTML = add(10, 5);
    document.getElementById("demo").innerHTML = add(10, 50);
    document.getElementById("demo").innerHTML = add(10, 500);
    document.getElementById("demo").innerHTML = add(10, 5000);

    console.log("HI");
    console.warn("This is a warning");
    console.error("Something went wrong");

  }
  debuggingtest();
   window.loadCount = loadCount;
   
   loadCount();
  }
  ProjectstestW3();

  function ToDotest() {
    function displayTasks() {
      let html = "";
      for (let i = 0; i < tasks.length; i++) {
        html +=  "<li>" + tasks[i] +
        " <button onclick = 'removeTask(" + i + ")'> x </li>"; 
       }
       document.getElementById("list").innerHTML = html;
    }  
    function addTask() {
      let taskInput = document.getElementById("task");
      let text = taskInput.value;
      if (text === "") {
        return;
      }
      tasks.push(text)
      taskInput.value = "";
      saveTasks();
      displayTasks();
    }
    function removeTask(i) {
      tasks.splice(i, 1);
      saveTasks();
      displayTasks();
    }
    function ClearAll() {
      tasks = [];
      saveTasks();
      displayTasks();
    }
    function saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    function loadTask() {
      let saved = localStorage.getItem("tasks");
      if (saved !== null) {
        tasks = JSON.parse(saved);
      }
    }
    loadTask();
    displayTasks();
  }
  ToDotest();