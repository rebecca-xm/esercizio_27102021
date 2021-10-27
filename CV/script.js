const darkModeBtn = document.querySelector(".enableDarkMode");
darkModeBtn.addEventListener(
  "click", () => {
    document.body.classList.toggle("darkMode");
  }
);

const lightModeBtn = document.querySelector(".enableLightMode");
lightModeBtn.addEventListener(
    "click", () => {
   document.body.classList.toggle("lightMode");
    }
);

const allP = document.getElementsByTagName("p");
console.log(allP);