window.addEventListener("load", function () {
  const mbNav = document.querySelector(".mb-nav");
  const mbNavActive = "mb-nav-active";
  const mbWrap = document.querySelector(".mb-wrap");
  const mbWrapActive = "mb-wrap-active";
  const mbWidth = 1024;

  mbNav.addEventListener("click", function () {
    let checkActive = this.classList.contains(mbNavActive);

    if (checkActive === false) {
      mbNav.classList.add(mbNavActive);
      mbWrap.classList.add(mbWrapActive);
    } else {
      mbNav.classList.remove(mbNavActive);
      mbWrap.classList.remove(mbWrapActive);
    }
  });

  mbWrap.addEventListener("click", function (event) {
    if (event.target === this) {
      mbNav.classList.remove(mbNavActive);
      mbWrap.classList.remove(mbWrapActive);
      resetSubMenu();
      sideOpenNumber = undefined;
    }
  });

  window.addEventListener("resize", function () {
    let windWidth = window.innerWidth;
    if (windWidth > mbWidth) {
      mbNav.classList.remove(mbNavActive);
      mbWrap.classList.remove(mbWrapActive);
      resetSubMenu();
      sideOpenNumber = undefined;
    }
  });

  // 모바일 아코디언 메뉴
  const sideLis = document.querySelectorAll(".side-menu > li");
  const sideMenuA = document.querySelectorAll(".side-menu > li > a");
  const sideSubMenu = document.querySelectorAll(".side-menu > li > .submenu");
  const sideMenuOffset = 53;
  let sideOpenNumber;

  const sideOpenHeightArray = [];
  sideSubMenu.forEach((item, index) => {
    sideOpenHeightArray[index] = item.scrollHeight + sideMenuOffset;
  });
  sideMenuA.forEach((item, index) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      showSubMenu(index);
    });
  });

  function resetSubMenu() {
    sideLis.forEach((item) => {
      anime({
        targets: item,
        height: 53,
        easing: "easeInOutQuad",
        duration: 300,
      });
    });
  }

  function showSubMenu(_showNumber) {
    resetSubMenu();
    if (_showNumber === sideOpenNumber) {
      sideOpenNumber = undefined;
      return;
    }

    sideLis.forEach((item, index) => {
      if (_showNumber === index) {
        anime({
          targets: item,
          height: sideOpenHeightArray[_showNumber],
          easing: "easeInOutQuad",
          duration: 300,
        });
      }
    });

    sideOpenNumber = _showNumber;
  }
});
