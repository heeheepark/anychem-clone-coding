window.onload = function () {
  // 모바일 버튼 기능
  let mbNav = document.querySelector(".mb-nav");
  let mbWrap = document.querySelector(".mb-wrap");
  mbNav.addEventListener("click", function () {
    // 토글도 좋다.
    // mbNa.classList.toggle("mb-nav-active")
    // mb-nav-active 클래스 적용 여부(true, false)
    let checkActive = mbNav.classList.contains("mb-nav-active");
    console.log("click", checkActive);

    if (checkActive === false) {
      mbNav.classList.add("mb-nav-active");
      mbWrap.classList.add("mb-wrap-active");
    } else {
      mbNav.classList.remove("mb-nav-active");
      mbWrap.classList.remove("mb-wrap-active");
    }
  });
  // 웹브라우저가 모든 렌더링 준비가 끝나면 실행하라
  // nav에 마우스 오버하면 높이 변화주기 260
  // nav에 마우스 아웃하면 높이 변화주기 100
  // header 를 변수정의
  // nav 를 변수정의

  let header = document.querySelector(".header");
  let nav = document.querySelector(".nav");

  console.log(header);
  console.log(nav);

  //   nav 마우스 이벤트 처리
  //    addEventListener 이란 모든 이벤트를 처리한다는 말
  // 화살표 함수를 사용했다.
  nav.addEventListener("mouseenter", () => {
    // header.style.height = "260px";
    // header.classList.add("%*@");
    //260픽셀로 변경되는 class를 작성해둠
    header.classList.add("header-active");
  });
  nav.addEventListener("mouseleave", () => {
    // header.style.height = "100px";
    header.classList.remove("header-active");
  });
  // 모바일 버튼 기능
  let mbnav = document.querySelector(".mb-nav");
  mbnav.addEventListener("click", function () {
    mbnav.classList.add("mb-nav-active");
  });
};
