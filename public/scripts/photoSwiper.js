(() => {
  const swiperElement = document.getElementById("photo-swiper");
  let swiper = new Swiper("#photo-swiper", {
    direction: 'horizontal',
    loop: false,
    spaceBetween: 24,
    slidesPerView: 1.3,
    height: 250,
  });

  if (window.innerWidth >= 1024) swiper.destroy(false);

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      swiper.destroy(false);
    } else {
      swiper = swiper.init(swiperElement);
    }
  });
})();
