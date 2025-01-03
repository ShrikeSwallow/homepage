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
    const githubIcon = document.createElement("img");
    githubIcon.classList.add("icon");
    githubIcon.src =
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg";
    githubAnchor.appendChild(githubIcon);
    github.appendChild(githubAnchor);
    socials.appendChild(github);

    const linkedin = document.createElement("li");
    linkedin.classList.add("linkedin");
    const linkedinAnchor = document.createElement("a");
    linkedinAnchor.href = "https://linkedin.com/ShrikeSwallow";
    const linkedinIcon = document.createElement("img");
    linkedinIcon.classList.add("icon");
    linkedinIcon.src =
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg";
    linkedinAnchor.appendChild(linkedinIcon);
    linkedin.appendChild(linkedinAnchor);
    socials.appendChild(linkedin);

    aboutMe.appendChild(socials);

    header.appendChild(aboutMe);
  };
  drawSection = () => {
    const section = document.querySelector("section");
  };
  drawFooter = () => {
    const footer = document.querySelector("footer");
  };
}
