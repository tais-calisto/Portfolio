// Typing effect
const typingEl = document.querySelector(".typing");

const texts = ["tecnologia.", "literatura.", "tofu.", "chá."];

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function typingLoop() {
  if (i <= texts.length) {
    isEnd = false;
    typingEl.innerHTML = currentPhrase.join("");

    if (!isDeleting && j <= texts[i].length) {
      currentPhrase.push(texts[i][j]);
      j++;
    }

    if (isDeleting && j <= texts[i].length) {
      currentPhrase.pop(texts[i][j]);
      j--;
    }

    if (j == texts[i].length) {
      isDeleting = true;
      isEnd = true;
    }

    if (isDeleting && j == 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i == texts.length) {
        i = 0;
      }
    }
  }
  const fast = Math.random() * (80 - 30) + 30;
  const normal = Math.random() * (300 - 100) + 100;
  const time = isEnd ? 2000 : isDeleting ? fast : normal;
  setTimeout(typingLoop, time);
}

typingLoop();

//Menu Mobile
const openMenuBtnEl = document.querySelector(".fa-bars");
const closeMenuBtnEl = document.querySelector(".close-sidebar");
const menuListEl = document.querySelector(".aside-list");
const menuItems = document.querySelectorAll(".aside-link");
const menuIcons = document.querySelectorAll(".icon");

openMenuBtnEl.addEventListener("click", () => {
  menuListEl.style.display = "block";
});

function closeMenu() {
  menuListEl.style.display = "none";
}

closeMenuBtnEl.addEventListener("click", closeMenu);

menuItems.forEach((item) => {
  item.addEventListener("click", closeMenu);
});

menuIcons.forEach((icon) => {
  icon.addEventListener("click", closeMenu);
});

//Toggle theme
const toggleThemeBtn = document.querySelector(".toggle-theme");
const themeIconEl = document.querySelector(".theme-icon");

toggleThemeBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("light-theme");
  if (document.documentElement.classList.contains("light-theme")) {
    themeIconEl.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  } else {
    themeIconEl.innerHTML = `<i class="fa-solid fa-moon"></i>`;
  }
});

//About Animation
const elements = document.querySelectorAll("[data-animation]");

function animeScroll() {
  const windowTop = window.pageYOffset;
  elements.forEach((el) => {
    if (windowTop > el.offsetTop) {
      el.classList.add("animate");
    } else {
      el.classList.remove("animate");
    }
  });
}

if (elements.length) {
  window.addEventListener("scroll", animeScroll);
}

//Projects Animation
const cards = document.querySelectorAll(".project-card");

function showCard() {
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
  cards.forEach((card) => {
    if (windowTop > card.offsetTop) {
      card.classList.add("show-card");
    } else {
      card.classList.remove("show-card");
    }
  });
}

if (cards.length) {
  window.addEventListener("scroll", showCard);
}

//Year
const yearEl = document.querySelector(".year");
const date = new Date().getFullYear();
yearEl.innerHTML = `${date}`;

//Scroll
const scrollLinks = document.querySelectorAll(".scroll-link");
const scrollAsideLinks = document.querySelectorAll(".aside-link");


scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const linkId = e.currentTarget.getAttribute("href").slice(1);
    const sectionIdEl = document.getElementById(`${linkId}`);
    console.log(sectionIdEl);

    let sectionElPosition = sectionIdEl.offsetTop;

    window.scroll({
      top: sectionElPosition,
      behavior: "smooth",
    });
  });
});

scrollAsideLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const linkId = e.currentTarget.getAttribute("href").slice(1);
    const sectionIdEl = document.getElementById(`${linkId}`);
    console.log(sectionIdEl);

    let sectionElPosition = sectionIdEl.offsetTop;

    window.scroll({
      top: sectionElPosition,
      behavior: "smooth",
    });
  });
});
