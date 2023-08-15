(() => {
  const swiper = new Swiper("#directions-swiper", {
    direction: 'horizontal',
    loop: false,
    spaceBetween: 20,
    slidesPerView: 1.3,
    height: 400,
  });

  if (window.innerWidth >= 1024) swiper.disable();

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      swiper.disable();
      console.log('hi');
    } else {
      swiper.enable();
    }
  });
})();
