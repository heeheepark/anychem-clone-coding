window.addEventListener("load", function () {
  let swGoods;

  const getData = async function () {
    try {
      let res = await fetch("data/gooddata.json");
      let result = await res.json();
      makeSlide(result);
      makeSlideShow();
      makeMenu(result);
    } catch (err) {
      console.log(err);
    }
  };

  function makeSlide(_data) {
    let html = ``;
    let copyArr = [..._data.goods];

    copyArr.forEach((item, index, arr) => {
      let tag = `
        <div class="swiper-slide">
          <a href="${item.link}" class="good-link">
            <div class="good-item">
              <div class="good-item-img" style="background-image:url(images/${item.image});">
                
              </div>
              <div class="good-item-txt">
                <p>${item.title}</p>
                <span>${item.desc}</span>
              </div>
            </div>
          </a>
        </div>
      `;
      html += tag;
    });

    document.querySelector(".sw-goods .swiper-wrapper").innerHTML = html;
  }

  function makeSlideShow() {
    swGoods = new Swiper(".sw-goods", {
      loop: true,
      speed: 1000,
      slidesPerView: 3,
      spaceBetween: 50,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".sw-goods-next",
        prevEl: ".sw-goods-prev",
      },
      breakpoints: {
        480: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1400: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1600: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
    swGoods.on("slideChange", function () {
      focusMenu(this.realIndex);
    });
  }

  function focusMenu(_index) {
    let lis = document.querySelectorAll(".goods-list li");
    lis.forEach((item, index, arr) => {
      if (index === _index) {
        item.classList.add("focus");
      } else {
        item.classList.remove("focus");
      }
    });
  }

  function makeMenu(_data) {
    let html = ``;
    _data.goods.forEach((item, index, arr) => {
      let tag = `
        <li><a href="#">${item.title}</a></li>
      `;
      html += tag;
    });
    document.querySelector(".goods-list").innerHTML = html;

    let lis = document.querySelectorAll(".goods-list li a");
    lis.forEach((item, index, arr) => {
      item.onclick = function (event) {
        event.preventDefault();
        swGoods.slideToLoop(index);
      };
    });

    focusMenu(0);
  }

  getData();

  const bt = document.querySelector(".sw-goods-pause");
  const icon = bt.querySelector(".fa-pause");

  let swGoodsState = "play";
  bt.onclick = (event) => {
    const isPlaying = swGoodsState === "play";
    swGoods.autoplay[isPlaying ? "stop" : "start"]();
    swGoodsState = isPlaying ? "stop" : "play";
    icon.classList.toggle("fa-play");
  };
});
