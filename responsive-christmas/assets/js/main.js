/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== DAY COUNTER FOR CHRISTMAS ===============*/

const titleData = document.getElementById("title-data"),
  numberData = document.getElementById("number-data"),
  textData = document.getElementById("text-data"),
  msgChristmas = document.getElementById("msg-christmas");

const christmasCountdown = () => {
  let now = new Date(),
    currentMonth = now.getMonth() + 1,
    currentDay = now.getDate();

  //-- calculate the year the next christmas will be

  let nextChristmasYear = now.getFullYear();
  if (currentMonth == 12 && currentDay > 25) {
    nextChristmasYear += 1;
  }

  let nextChristmasDate = `Dec 25 , ${nextChristmasYear} 00:00:00`,
    christmasDay = new Date(nextChristmasDate),
    timeLeft = christmasDay - now;

  let days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0;

  //-- Dont calculate the time left if it christmas day

  if (currentMonth != 12 || (currentMonth = 12 && currentDay != 25)) {
    days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
    hours = Math.floor(timeLeft / 60 / 60) % 24;
    minutes = Math.floor(timeLeft / 100 / 60) % 60;
    seconds = Math.floor(timeLeft / 1000) % 60;
  }
  //-- show missing days

  numberData.innerHTML = days < 10 ? `0${days}` : days;
  textData.innerHTML = "Days";

  //-- show missing hours
  if (currentDay == 24) {
    numberData.innerHTML = hours < 10 ? `0${hours}` : hours;
    textData.innerHTML = "Hours";
  }

  //-- show missing minutes. countdown, 0 hours left , show minutes

  if (currentDay == 24 && hours === 0) {
    numberData.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    textData.innerHTML = "Minutes";
  }
  //-- show missing seconds. countdown, 0 hours left , show sec

  if (currentDay == 24 && hours === 0 && minutes === 0) {
    numberData.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    textData.innerHTML = "Seconds";
  }
  //-- show message on Christmas Day
  if (currentMonth == 12 && currentDay == 25) {
    titleData.style.display = "none";
    msgChristmas.style.display = "block";
    msgChristmas.innerHTML = "Today is dec 25 , Merry Christmas";
  }

  //-- show remaining days & remove christmas message
  if (currentMonth == 12 && currentDay == 26) {
    titleData.style.display = "block";
    msgChristmas.style.display = "none";
  }
};

setInterval(christmasCountdown, 1000);
