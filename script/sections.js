// Data objects
const skills = [
  { name: "HTML", img: "images/html-5-svgrepo-com.svg" },
  { name: "CSS", img: "images/css3-svgrepo-com.svg" },
  { name: "JavaScript", img: "images/js-svgrepo-com.svg" },
  { name: "PHP", img: "images/php-svgrepo-com.svg" },
  { name: "Python", img: "images/python-svgrepo-com.svg" },
  { name: "NodeJS", img: "images/node-js-svgrepo-com.svg" },
  { name: "Java", img: "images/java-4-logo-svgrepo-com.svg" },
  { name: "MySQL", img: "images/mysql-logo-svgrepo-com.svg" },
  { name: "Oracle", img: "images/oracle-svgrepo-com.svg" },
  { name: "Django", img: "images/django-svgrepo-com.svg" },
  { name: "Bootstrap", img: "images/bootstrap-fill-svgrepo-com (2).svg" },
  { name: "Flask", img: "images/flask-svgrepo-com (1).svg" },
  { name: "Git", img: "images/git-svgrepo-com.svg" },
  { name: "MongoDB", img: "images/mongodb-svgrepo-com.svg" },
  { name: "PostgreSQL", img: "images/postgresql-svgrepo-com.svg" },
  { name: "ASP.NET", img: "images/aspnet-svgrepo-com.svg" },
  { name: "C/C++", img: "images/c-plus-plus-svgrepo-com.svg" },
  { name: "C#", img: "images/c-sharp-svgrepo-com.svg" },
  { name: "WordPress", img: "images/wordpress-svgrepo-com.svg" },
  { name: "Dart", img: "images/dart-svgrepo-com.svg" },
  { name: "Flutter", img: "images/flutter-svgrepo-com.svg" },
  { name: "Microsoft Azure", img: "images/icons8-azure.svg" },
];

const experience = [
  {
    role: "IT Manager",
    company: "4RevolutionStore",
    duration: "May 2019 - February 2023",
    details: [
      "Developed an e-commerce Website creating branding, Logotypes, and photo shooting products increasing sales by 300% in the first 3 months.",
      "Maintain update and redesign the website while advertising using Google Ads, Google Analytics and Meta business Ads.",
      "Built and deployed a mobile web application for Customers Information, Inventory, Sales, Deliveries, Accountancy, Data Analysis, Purchases, Warranties and Sales Per Product to increase productivity and accuracy in service increasing productivity by 200%.",
    ],
    img: "images/triangle-filled-svgrepo-com.svg",
  },
  {
    role: "Web Developer",
    company: "Alzheime's Institute Mexico",
    duration: "June 2021 - January 2022",
    details: [
      "Website development for The Alzheimer Institute in Mexico allowing them to receive donations through their website.",
      "Provide training and documentation for employees at Alzheimer’s Institute for the use and administration of the web site and server.",
    ],
    img: "images/triangle-filled-svgrepo-com.svg",
  },
  {
    role: "Junior Developer Intern",
    company: "Thincode",
    duration: "August 2021 - January 2022",
    details: [
      "Performed updates and the creation of new features using COBOL and Java ensuring all the features are properly built and programming standards are correctly performed.",
      "Performed Unit Tests using TANDEM-GBS.",
    ],
    img: "images/triangle-filled-svgrepo-com.svg",
  },
  {
    role: "Web Developer",
    company: "GAOTek Inc.",
    duration: "February 2024 - Present",
    details: [
      "Worked on programming and designing components and features for the website.",
      "Worked on the development of the website using HTML, CSS, JavaScript, and PHP.",
      "Implemented AJAX Search engine for products of an online store.",
      "Implemented Google Analytics, and Google tags to position the website on the search console.",
    ],
    img: "images/triangle-filled-svgrepo-com.svg",
  },
];

const projects = [
  {
    title: "4Revolution Online Store",
    description:
      "Responsive online wristwatches store with cart, shipping and delivery options depending on the Location inside Canada.",
    technologies: [
      "images/html-5-svgrepo-com.svg",
      "images/css3-svgrepo-com.svg",
      "images/js-svgrepo-com.svg",
      "images/php-svgrepo-com.svg",
      "images/wordpress-svgrepo-com.svg",
    ],
    img: "images/4rev01.png",
    link: "https://www.4revolutionstore.com/",
  },
  {
    title: "Alzheimer's Institute Website",
    description:
      "Organization Website containing Institute information, contact forms, blogs and donations through PyPal.",
    technologies: [
      "images/html-5-svgrepo-com.svg",
      "images/css3-svgrepo-com.svg",
      "images/js-svgrepo-com.svg",
      "images/php-svgrepo-com.svg",
      "images/wordpress-svgrepo-com.svg",
    ],
    img: "images/inst-mem01.png",
    link: "https://institutodelamemoria.org.mx/",
  },
  {
    title: "ERP management system AppSheet Mobile/Web",
    description:
      "Web app available in mobile devices and browsers. Create, Read, Update and Delete (CRUD) features. Secure password login (password encryption). Data analysis and statistics.",
    technologies: ["images/AppSheet_Logo.png"],
    img: "images/4revapp02.png",
    link: "https://www.appsheet.com/start/014bf611-3513-4619-b81c-bd1ecddbcf88#appName=UntitledApp-2023255&group=%5B%5D&page=deck&sort=%5B%7B%22Column%22%3A%22Fecha%22%2C%22Order%22%3A%22Descending%22%7D%5D&table=Venta&view=Ventas",
  },
  {
    title: "Video Games App JavaFX",
    description:
      "JavaFX Application Using Twitch API with multiple requests. Search and filter games by category. Look for a game writing any word that relates the game. Multiple windows displaying all the information and images from the selected game.",
    technologies: [
      "images/java-4-logo-svgrepo-com.svg",
      "images/mysql-logo-svgrepo-com.svg",
    ],
    img: "images/gamesJavaApp01.png",
    link: "https://github.com/Crabbier/CSP_G...",
  },
];

// Functions to populate sections
function populateSkills() {
  const skillsContainer = document.getElementById("mySkills");
  skills.forEach((skill) => {
    const skillCard = document.createElement("div");
    skillCard.classList.add("skill-card");
    skillCard.innerHTML = `<img src="${skill.img}" alt="${skill.name} logo"><h5>${skill.name}</h5>`;
    skillsContainer.appendChild(skillCard);
  });
}

// function populateExperience() {
//   const experienceContainer = document.getElementById('myExperience');
//   experience.forEach(exp => {
//     const lineDiv = document.createElement('div');
//     lineDiv.classList.add('line');
//     const expDiv = document.createElement('div');
//     expDiv.classList.add('exp');
//     expDiv.innerHTML = `
//       <h3>${exp.role}</h3><img class="arrow" src="${exp.img}" />
//       <h5>${exp.company}</h5>
//       <p>${exp.duration}</p>
//       <ul>${exp.details.map(detail => `<li>${detail}</li>`).join('')}</ul>
//     `;
//     // const circleObject = document.createElement('')
//     // circleObject.innerHTML(
//     //   `<svg height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     //     <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
//     //   </svg>`
//     // )
//     const lineContainer = experienceContainer.appendChild(lineDiv);
//     lineContainer.appendChild(expDiv);
//   });
// }

function populateProjects() {
  const projectsContainer = document.querySelector(".projects");
  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("projectCard");
    projectCard.innerHTML = `
        <div class="container-card">
          <img class="project-photo" src="${project.img}" alt="${
      project.title
    }">
          <div class="project-desc">
            <p class="card-title">${project.title}</p>
            <p class="card-description">${project.description}</p>
            <div class="project-technologies">${project.technologies
              .map(
                (tech) =>
                  `<img src="${tech}" alt="${
                    tech.split("/").pop().split(".")[0]
                  } logo">`
              )
              .join("")}</div>
            <a class="clickable-project" href="${
              project.link
            }" target="_blank" rel="noopener">View project</a>
          </div>
        </div>
      `;
    projectsContainer.appendChild(projectCard);
  });
}

// Populate sections on page load
document.addEventListener("DOMContentLoaded", () => {
  populateSkills();
  // populateExperience();
  // populateProjects();
});
