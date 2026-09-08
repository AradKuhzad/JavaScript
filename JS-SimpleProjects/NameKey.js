function EventTest2() {
    const k = document.getElementById("k");
    k.addEventListener("keydown", function (event) {
      document.getElementById("namekey").innerHTML = "You pressed: " + event.key;
    });
  }
  EventTest2(); 