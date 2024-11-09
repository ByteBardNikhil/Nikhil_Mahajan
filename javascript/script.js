document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navList = document.getElementById("navlist");
  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    navList.classList.toggle("active");
  });
});
