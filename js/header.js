window.onload = function () {
  // nav에 마우스 오버하면 header 높이를 260px로 변경하기
  // nav에 마우스 아웃하면 header 높이를 100px로 변경하기
  // header를 js로 저장(변수 정의)
  let header = document.querySelector(".header");
  // nav를 js로 저장(변수 정의)
  let nav = document.querySelector(".nav");

  // nav에 마우스 오버 처리
  nav.addEventListener("mouseenter", function () {
    header.classList.add("header-active");
  });

  // nav에 마우스 아웃 처리
  nav.addEventListener("mouseleave", function () {
    header.classList.remove("header-active");
  });
};
