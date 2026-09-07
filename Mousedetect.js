function EventTest() {
    const box = document.getElementById("box");
    box.addEventListener("mouseover", function () {
      box.innerHTML = "Mouse is over me!";
    });
    box.addEventListener("mouseout", function () {
      box.innerHTML = "Mouse is out";
    });
  }
  EventTest();