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