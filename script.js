// Auto type animation
let typed = new Typed(".auto-type", {
  strings: ["Ayon Jodder", "UI Designer", "Web Developer"],
  typeSpeed: 150,
  backSpeed: 100,
  loop: true,
});
//Mood changer
//For Dark mode====================
const sunIcon = document.getElementById("sun");
sunIcon.addEventListener("click", () => {
  const body = document.querySelector("body");
  body.classList.remove("dark-mode");
  body.classList.add("light-mode");

  const ul = document.querySelector("#sideMenu");
  ul.classList.remove("dark-mode", "dark-mode-shadow");
  ul.classList.add("light-mode", "light-mode-shadow");
  const anchor = Array.from(document.querySelectorAll(".anchor-class-changer"));
  anchor.forEach((e) => {
    e.classList.remove("dark-mode-text");
    e.classList.add("light-mode-text");
  });

  sunIcon.style.display = "none";
  moonIcon.style.display = "block";

  const h1 = document.getElementById("type-animation-header");
  console.log(h1);
  h1.classList.remove("dark-mode-text");
  h1.classList.add("light-mode-text");

  const p = document.getElementById("type-animation-para");
  p.classList.remove("dark-mode-text");
  p.classList.add("light-mode-text");
});

//For Light mode=============================
const moonIcon = document.getElementById("moon");
moonIcon.addEventListener("click", () => {
  const body = document.querySelector("body");
  body.classList.remove("light-mode");
  body.classList.add("dark-mode");

  const ul = document.querySelector("#sideMenu");
  ul.classList.remove("light-mode", "light-mode-shadow");
  ul.classList.add("dark-mode", "dark-mode-shadow");
  const anchor = Array.from(document.querySelectorAll(".anchor-class-changer"));
  anchor.forEach((e) => {
    e.classList.remove("light-mode-text");
    e.classList.add("dark-mode-text");
  });

  sunIcon.style.display = "block";
  moonIcon.style.display = "none";

  const h1 = document.getElementById("type-animation-header");
  h1.classList.remove("light-mode-text");
  h1.classList.add("dark-mode-text");

  const p = document.getElementById("type-animation-para");
  p.classList.add("dark-mode-text");
  p.classList.remove("light-mode-text");
});
