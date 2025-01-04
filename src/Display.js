import openInNew from "./images/open-in-new.svg";
import calculator from "./images/calculator.PNG";
import etchAsketch from "./images/etch-a-sketch.PNG";
import ticTacToe from "./images/tic-tac-toe.PNG";
import businessPage from "./images/business-page.PNG";
import todoApp from "./images/todo-app.PNG";
import battleships from "./images/battleships.PNG";
export default class Display {
  constructor() {}
  initialize = () => {
    this.drawMain();
    this.drawFooter();
  };
  drawMain = () => {
    this.drawHeader();
    this.drawSection();
  };
  drawHeader = () => {
    const header = document.querySelector("header");

    // create profile picture and caption
    const figure = document.createElement("figure");
    const figureImg = document.createElement("img");
    figureImg.alt = "";
    figure.appendChild(figureImg);
    const figcaption = document.createElement("figcaption");
    figcaption.textContent = "Shrike Swallow";
    figure.appendChild(figcaption);
    header.appendChild(figure);

    // create about me article
    const aboutMe = document.createElement("article");
    aboutMe.classList.add("about-me");

    const h1 = document.createElement("h1");
    h1.textContent = "About me";
    aboutMe.appendChild(h1);

    const p = document.createElement("p");
    p.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae orci at felis finibus consectetur. Nam commodo lorem ex, ut gravida est porttitor sed. Duis id leo at justo suscipit sagittis. Praesent ultricies hendrerit vehicula. Donec commodo sed mauris ac fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc diam nisl, pellentesque a tellus a, tincidunt convallis mauris. Fusce finibus, libero in dapibus sodales, urna velit mattis nunc, a tincidunt urna massa in neque. Sed consectetur et libero et efficitur. `;
    aboutMe.appendChild(p);

    // create social media list
    const socials = document.createElement("ul");
    socials.classList.add("social-media-list");

    const github = document.createElement("li");
    github.classList.add("github");
    const githubAnchor = document.createElement("a");
    githubAnchor.href = "https://github.com/ShrikeSwallow";
    githubAnchor.ariaLabel = "GitHub Profile";
    githubAnchor.target = "_blank";
    const githubIcon = document.createElement("img");
    githubIcon.classList.add("icon");
    githubIcon.src =
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg";
    githubIcon.alt = "";
    githubAnchor.appendChild(githubIcon);
    github.appendChild(githubAnchor);
    socials.appendChild(github);

    const linkedin = document.createElement("li");
    linkedin.classList.add("linkedin");
    const linkedinAnchor = document.createElement("a");
    linkedinAnchor.href = "https://linkedin.com/ShrikeSwallow";
    linkedinAnchor.ariaLabel = "LinkedIn Profile";
    linkedinAnchor.target = "_blank";
    const linkedinIcon = document.createElement("img");
    linkedinIcon.classList.add("icon");
    linkedinIcon.src =
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg";
    linkedinIcon.alt = "";
    linkedinAnchor.appendChild(linkedinIcon);
    linkedin.appendChild(linkedinAnchor);
    socials.appendChild(linkedin);

    aboutMe.appendChild(socials);

    header.appendChild(aboutMe);
  };
  drawSection = () => {
    const section = document.querySelector("section");
    const h2 = document.createElement("h2");
    h2.classList.add("my-work");
    h2.textContent = "My work";
    section.appendChild(h2);

    const projects = [
      {
        name: "Calculator",
        description:
          "One of the first projects in The Odin Project. I had to create a calculator in a browser.",
        screenshot: calculator,
        github: "https://github.com/ShrikeSwallow/calculator-top",
        preview: "https://shrikeswallow.github.io/calculator-top/",
      },
      {
        name: "Etch-a-sketch",
        description:
          "CSS-based etch-a-sketch. I've added colour-changing functionality.",
        screenshot: etchAsketch,
        github: "https://github.com/ShrikeSwallow/etch-a-sketch",
        preview: "https://shrikeswallow.github.io/etch-a-sketch/",
      },
      {
        name: "Tic-tac-toe",
        description: "My implementation of the tic-tac-toe game.",
        screenshot: ticTacToe,
        github: "https://github.com/ShrikeSwallow/tic-tac-toe-top",
        preview: "https://shrikeswallow.github.io/tic-tac-toe-top/",
      },
      {
        name: "Business page",
        description: "An example of a static business website.",
        screenshot: businessPage,
        github: "https://github.com/ShrikeSwallow/business-page",
        preview: "https://shrikeswallow.github.io/business-page/",
      },
      {
        name: "To-do app",
        description:
          "A very simple project/task management system. Utilises local storage.",
        screenshot: todoApp,
        github: "https://github.com/ShrikeSwallow/todo-app",
        preview: "https://shrikeswallow.github.io/todo-app/",
      },
      {
        name: "Battleships",
        description: "My implementation of the Battleships game.",
        screenshot: battleships,
        github: "https://github.com/ShrikeSwallow/battleship",
        preview: "https://shrikeswallow.github.io/battleship/",
      },
    ];

    projects.forEach((project) => this.drawProject(project));
  };
  drawProject = (project) => {
    const section = document.querySelector("section");
    const container = document.createElement("div");
    container.classList.add("project-container");

    const screenshot = document.createElement("img");
    screenshot.src = `${project.screenshot}`;
    screenshot.alt = "";
    container.appendChild(screenshot);

    const projectHeader = document.createElement("div");
    projectHeader.classList.add("project-header");
    const h3 = document.createElement("h3");
    h3.classList.add("project-name");
    h3.textContent = `${project.name}`;
    projectHeader.appendChild(h3);

    const projectLinks = document.createElement("ul");
    projectLinks.classList.add("project-links-list");

    const github = document.createElement("li");
    github.classList.add("github");
    const githubAnchor = document.createElement("a");
    githubAnchor.href = `${project.github}`;
    githubAnchor.ariaLabel = `GitHub repository of ${project.name}`;
    githubAnchor.target = "_blank";
    const githubIcon = document.createElement("img");
    githubIcon.classList.add("icon");
    githubIcon.src =
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg";
    githubIcon.alt = "";
    githubAnchor.appendChild(githubIcon);
    github.appendChild(githubAnchor);
    projectLinks.appendChild(github);

    const preview = document.createElement("li");
    preview.classList.add("preview");
    const previewAnchor = document.createElement("a");
    previewAnchor.href = `${project.preview}`;
    previewAnchor.ariaLabel = `Link to a website containing a preview of ${project.name}`;
    previewAnchor.target = "_blank";
    const previewIcon = document.createElement("img");
    previewIcon.classList.add("icon");
    previewIcon.src = openInNew;
    previewIcon.alt = "";
    previewAnchor.appendChild(previewIcon);
    preview.appendChild(previewAnchor);
    projectLinks.appendChild(preview);

    projectHeader.appendChild(projectLinks);
    container.appendChild(projectHeader);

    const projectDescription = document.createElement("p");
    projectDescription.classList.add("project-description");
    projectDescription.textContent = `${project.description}`;
    container.appendChild(projectDescription);

    section.appendChild(container);
  };
  drawFooter = () => {
    const footer = document.querySelector("footer");
  };
}
