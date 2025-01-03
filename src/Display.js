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
  };
  drawSection = () => {
    const section = document.querySelector("section");
  };
  drawFooter = () => {
    const footer = document.querySelector("footer");
  };
}
