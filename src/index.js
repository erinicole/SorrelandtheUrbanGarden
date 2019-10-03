console.log("Webpack is working!");
import Character from "./character";
import { allText, changePage } from "./text";

window.Character = Character;

window.addEventListener("DOMContentLoaded", event => {
  const width = document.documentElement.clientWidth;
  const height = document.documentElement.clientHeight;
  const canvasWidth = width / 2;
  const str = String(canvasWidth) + "px";
  console.log(str);
  const body = document.getElementById("body");
  const canvas = document.getElementById("story-canvas");
  const textArea = document.getElementById("text-area");
  textArea.innerHTML = allText()[0].text;
  body.style.backgroundColor = `rgb(227, 254, 255)`;
  canvas.style.width = str;
  canvas.style.height = "100vh";
  const ctx = canvas.getContext("2d");
  window.ctx = ctx;
  const girl = new Character({ x: 0, y: 100, ctx });
  girl.drawImage();
  // this paints the sky
  ctx.fillStyle = `rgb(227, 254, 255)`;
  ctx.fillRect(0, 0, width, height);
  //this paints the ground
  ctx.beginPath();
  ctx.rect(0, 140, width, 10);
  ctx.fillStyle = `rgb(130, 79, 43)`;
  ctx.fill();
  //this is the array that holds the grass image
  const grassXs = [];
  for (let i = 0; i < 4; i++) {
    grassXs.push(i * 100);
  }
  console.log(grassXs);
  const drawGrass = () => {
    girl.drawImage();
    // ctx.fillStyle = `rgb(227, 254, 255)`;
    // ctx.fillRect(0, 0, width, height);
    // this paints the ground
    // ctx.beginPath();
    // ctx.rect(0, 140, width, 10);
    // ctx.fillStyle = `rgb(130, 79, 43)`;
    // ctx.fill();
    for (let i = 0; i < grassXs.length; i++) {
      const img = new Image();
      img.src = "../images/grass.png";
      img.onload = () => {
        ctx.drawImage(img, grassXs[i], 130, 100, 20);
      };
      grassXs[i] -= 1;
      if (grassXs[i] <= -100) {
        grassXs[i] = 300;
      }
    }
    ctx.clearRect(0, 0, width, height);
  };
  //   const loopGrass = () => setInterval(() => drawGrass(), 100)
  //   loopGrass()
});
