// hamburger clicked on
const navLinksContain = document.querySelector(".nav-links-contain");
((burger) => {
  burger.addEventListener("click", () => {
    burger.classList.toggle("clicked");
    if (burger.classList.contains("clicked")) {
      burger.src = "assets/shared/icon-close.svg";
      navLinksContain.style.transform = "translateX(0)";
    } else {
      burger.src = "assets/shared/icon-hamburger.svg";
      navLinksContain.style.transform = "translateX(100%)";
    }
  });
})(document.querySelector(".hamburger-btn"));
