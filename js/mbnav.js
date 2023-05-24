window.addEventListener("load", function () {
  const mbNav = document.querySelector(".mb-nav");
  const mbNavActive = "mb-nav-active";
  const mbWrap = document.querySelector(".mb-wrap");
  const mbWrapActive = "mb-wrap-active";
  const mbWidth = 1024;

  mbNav.addEventListener("click", function () {
    // 토글도 좋다.
    // mbNa.classList.toggle("mb-nav-active")
    // mb-nav-active 클래스 적용 여부(true, false)
    let checkActive = mbNav.classList.contains(mbNavActive);

    if (checkActive === false) {
      mbNav.classList.add(mbNavActive);
      mbWrap.classList.add(mbWrapActive);
    } else {
      mbNav.classList.remove(mbNavActive);
      mbWrap.classList.remove(mbWrapActive);
    }
  });

  // 화면의 리사이즈를 체크하여 처리
  window.addEventListener("resize", function () {
    let windWidth = window.innerWidth;
    if (windWidth > mbWidth) {
      mbWrap.classList.remove(mbWrapActive);
      mbNav.classList.remove(mbNavActive);
    }
  });

  // 아코디언 메뉴
  const sideMenuA = document.querySelectorAll(".side-menu > li > a");
  const sideSubMenu = document.querySelectorAll(".side-menu > li > .submenu");
  // sideMenuA의 각각을 클릭하면 클릭되어진 순간
  // index값을 콘솔로 출력
  sideMenuA.forEach((item, index) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      changeSubmenu(index);
    });
  });
  function changeSubmenu(_index) {
    sideSubMenu.forEach((item, index) => {
      if (_index === index) {
        if (item.style.display === "block") {
          item.style.display = "none";
        } else {
          item.style.display = "block";
        }
      } else {
        item.style.display = "none";
      }
    });
  }
});
