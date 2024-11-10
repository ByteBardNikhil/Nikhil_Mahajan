document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navList = document.getElementById("navlist");
  const li = document.querySelector("#navlist li");

  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    if (menuIcon.classList.contains("active")) {
      document.querySelector(".logo").style.display = "none";
      navList.style.display = "flex";
      li.forEach((ele) => (ele.style.fontSize = "0.3rem"));
    } else {
      document.querySelector(".logo").style.display = "flex";
      navList.style.display = "none";
    }

    navList.classList.toggle("active");
  });
});
