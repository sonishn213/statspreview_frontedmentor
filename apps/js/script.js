window.addEventListener("load", function () {
  function changeimg(x) {
    if (x.matches) {
      // If media query matches
      let imgcls = document.getElementsByClassName("imgs")[0];
      imgcls.src = "./images/image-header-mobile.jpg";
    }
  }

  var x = window.matchMedia("(max-width: 376px)");
  changeimg(x); // Call listener function at run time
  x.addListener(changeimg);
});
