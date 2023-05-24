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

  // 화면의 리사이즈를 체크 해서 처리
  // this.window.onresize = function(){}
  this.window.addEventListener("resize", function () {
    let windWidth = window.innerWidth;
    if (windWidth > mbWidth) {
      mbNav.classList.remove(mbNavActive);
      mbWrap.classList.remove(mbWrapActive);
    }
  });
});
