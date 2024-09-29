var swiper_video = document.querySelectorAll("#video .swiper-slide video");
console.log(swiper_video);

swiper_video.forEach((video) => {
  video.addEventListener("mouseover", function () {
    video.play();
  });
});
swiper_video.forEach((video) => {
  video.addEventListener("mouseout", function () {
    video.pause();
  });
});

var swiper = new Swiper(".videoSlider1", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 30,
  slidesPerView: "1.4",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  breakpoints: {
    640: {
      slidesPerView: "1.1",
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});

var swiper = new Swiper(".imageSlider1", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 30,
  slidesPerView: "1.4",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});

var swiper = new Swiper(".downimageslide", {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
