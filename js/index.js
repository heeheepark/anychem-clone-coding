window.onload = function () {
  // 모달창 처리
  let body = document.querySelector("body");
  let modal = document.querySelector(".modal");
  const modalClose = document.querySelector(".modal-cont .closeBtn");
  body.classList.add("modal-active");
  modalClose.onclick = function () {
    body.classList.remove("modal-active");
    modal.style.display = "none";
  };

  // 모달창 아이콘
  const icon = document.querySelectorAll(".icon");
  const iconInfo = document.querySelectorAll(".icon-info");
  icon.forEach((item, index) => {
    item.addEventListener("mouseenter", function () {
      iconInfo[index].style.display = "block";
    });
    item.addEventListener("mouseleave", function () {
      iconInfo[index].style.display = "none";
    });
  });
};
