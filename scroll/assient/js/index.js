let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains1 = document.getElementById("mountains1");
let mountains2 = document.getElementById("mountains2");
let boat = document.getElementById("boat");
let river = document.getElementById("river");
let maro = document.querySelector(".maro");
let main = document.querySelector(".main");

window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value + "px";
  moon.style.top = value * 4 + "px";
  mountains1.style.top = value * 2 + "px";
  mountains2.style.top = value * 1.5 + "px";
  river.style.top = value + "px";
  boat.style.left = value * 3 + "px";
  boat.style.top = value + "px";
  maro.style.fontSize = value + "px";
  if (scrollY >= 67) {
    maro.style.fontSize = 67 + "px";
    maro.style.position = "fixed";
    if (scrollY >= 440) {
      maro.style.display = "none";
    } else {
      maro.style.display = "block";
    }
    if (scrollY >= 117) {
      main.style.background = " linear-gradient(#376281, #10001f)";
    } else {
      main.style.background = " linear-gradient(#200016, #10001f)";
    }
  }
};
document.write;
