document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navList = document.getElementById("navlist");
  const liElements = document.querySelectorAll("#navlist li");

  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    if (menuIcon.classList.contains("active")) {
      document.querySelector(".logo").style.display = "none";
      // document.querySelector("..leftsection").style.display = "none";

      navList.style.display = "flex";
      // liElements.forEach((ele) => (ele.style.fontSize = "40%"));
    } else {
      // document.querySelector(".navbar").style.display = "block";

      document.querySelector(".logo").style.display = "flex";
      navList.style.display = "none";
    }

    navList.classList.toggle("active");
  });
});
