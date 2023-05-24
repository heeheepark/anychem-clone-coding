// 웹브라우저에 html, css, js, image 를
// 모두 불러들여서 렌더링 준비가 끝나면
// 그때 function 의 블럭 안쪽 { } 실행!
window.onload = function () {
  // 모바일 버튼 기능
  let mbNav = document.querySelector(".mb-nav");
  let mbWrap = document.querySelector(".mb-wrap");
  mbNav.addEventListener("click", function () {
    // 토글도 좋다.
    // mbNa.classList.toggle("mb-nav-active")
    // mb-nav-active 클래스 적용 여부(true, false)
    let checkActive = mbNav.classList.contains("mb-nav-active");

    if (checkActive === false) {
      mbNav.classList.add("mb-nav-active");
      mbWrap.classList.add("mb-wrap-active");
    } else {
      mbNav.classList.remove("mb-nav-active");
      mbWrap.classList.remove("mb-wrap-active");
    }
  });

  // nav 에 마우스 오버하면 header 높이 260px 변경주기
  // nav 에 마우스 아웃하면 header 높이 100px 변경하기
  // header 를 js 로 저장해 보자(변수 정의해 보자)
  let header = document.querySelector(".header");
  // nav 를 js 로 저장해 보자(변수 정의해 보자)
  let nav = document.querySelector(".nav");
  //   console.log(header);
  //   console.log(nav);

  //   nav 에 마우스 오버 처리
  //  html 요소에 마우스 오버 처리하는 법
  nav.addEventListener("mouseenter", function () {
    // header 의 높이를 260 픽셀로 고치고 싶다.
    // header.style.height = "260px";
    // 우리는 260 픽셀로 변경되는 class 를 작성해 두었다.
    header.classList.add("header-active");
  });
  //   nav 에 마우스 아웃 처리
  //  html 요소에 마우스 아웃 처리하는 법
  nav.addEventListener("mouseleave", function () {
    // header 의 높이를 100 픽셀로 고치고 싶다.
    // header.style.height = "100px";
    // 클래스를 제거한다.
    header.classList.remove("header-active");
  });

  // let a = document.querySelectorAll(".gnb > li");
  // console.log(a);
  // a.forEach(function (item) {
  //   console.log(item);
  //   console.log(item.getBoundingClientRect().left);
  //   console.log(item.offsetWidth);
  // });
};
