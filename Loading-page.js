function EventTest3() {
    window.addEventListener("load", function () {
        document.getElementsByClassName("loadingcontent")[0].style.display = "none";
        document.getElementsByClassName("allcontent")[0].style.display = "block";
      }, 2000)
    });
  }
  EventTest3();