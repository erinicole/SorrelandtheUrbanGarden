console.log("Webpack is working!");
import Character from "./character";

window.Character = Character;

window.addEventListener("DOMContentLoaded", event => {
  const canvas = document.getElementById("story-canvas");
  canvas.style.width =
    '100vw';
   canvas.style.height =
     '100vh';
  const ctx = canvas.getContext("2d");
  window.ctx = ctx;
  const girl = new Character({
    x: 0,
    y: 100,
    ctx
  });
  girl.drawImage();


});