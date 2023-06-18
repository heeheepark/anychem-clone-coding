window.addEventListener("load", function () {
  let header = document.querySelector(".header");
  let nav = document.querySelector(".nav");

  nav.addEventListener("mouseenter", function () {
    header.classList.add("header-active");
  });

  nav.addEventListener("mouseleave", function () {
    header.classList.remove("header-active");
  });

  let gnbA = document.querySelectorAll(".gnb > li");
  let navBlueBar = document.querySelector(".nav-blue-bar");

  let posX = gnbA[0].getBoundingClientRect().left;
  let width = gnbA[0].getBoundingClientRect().width;
  navBlueBar.style.left = posX + "px";
  navBlueBar.style.width = width + "px";

  gnbA.forEach((item) => {
    item.addEventListener("mouseenter", function (event) {
      let posX = this.getBoundingClientRect().left;
      let width = this.getBoundingClientRect().width;
      anime({
        targets: navBlueBar,
        left: posX,
        width: width,
        easing: "easeInOutQuad",
        duration: 500,
      });
    });
  });

  const visual = this.document.querySelector(".visual");

  this.window.addEventListener("scroll", function () {
    let scY = window.scrollY;
    if (scY > 0) {
      header.classList.add("header-fixed");
      visual.classList.add("visual-fixed");
    } else {
      header.classList.remove("header-fixed");
      visual.classList.remove("visual-fixed");
    }
  });
});
