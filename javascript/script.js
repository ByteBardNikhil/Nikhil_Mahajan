document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navList = document.getElementById("navlist");
  const liElements = document.querySelectorAll("#navlist li");

  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    if (menuIcon.classList.contains("active")) {
      document.querySelector(".logo").style.display = "none";

      navList.style.display = "flex";
    } else {
      document.querySelector(".logo").style.display = "flex";

      navList.style.display = "none";
    }

    navList.classList.toggle("active");
  });
});

/*project script code start */
const card = document.querySelector(".cards");
const path = "../json/projectInfo.json";

async function loadProjects() {
  try {
    const response = await fetch(path);
    const data = await response.json();

    data.projects.forEach((project) => {
      const projectHTML = `
     
        <div class="image">
          <img src="${project.image}" alt="Project Image" />
        </div>
        <div class="card-body">
          <h2 class="card-title">${project.title}</h2>
          <p class="card-description">
            ${project.description}
          </p>
          <h4>Technologies Used:</h4>
          <ul class="tech-list">
            ${project.technologies.map((tech) => `<li>${tech}</li>`).join("")}
          </ul>
          <h4>Features:</h4>
          <ul class="tech-list">
            ${project.features.map((feature) => `<li>${feature}</li>`).join("")}
          </ul>
          <div class="card-footer">
            <a href="${project.repository}" class="link">Repository</a>
            <a href="${project.view}" class="link">View</a>
            <span>Status: ${project.status}</span>
          </div>
        </div>
      
      `;

      const projectCard = document.createElement("div");
      projectCard.classList.add("card");
      projectCard.innerHTML = projectHTML;
      card.appendChild(projectCard);
    });
  } catch (error) {
    console.error("Error loading project data:", error);
  }
}

loadProjects();
