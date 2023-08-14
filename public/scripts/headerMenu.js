(() => {
  const headerToggle = document.getElementById("header-toggle");
  const headerClose = document.getElementById("header-close");
  const menu = document.getElementById("header-menu");

  headerToggle.addEventListener("click", () => {
    menu.style.transform = "translateX(0)";
  });

  headerClose.addEventListener("click", () => {
    menu.style.transform = "translateX(-200%)";
  })
})();