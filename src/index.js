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
  const girl = new Character({x: 0, y: 100, ctx});
  girl.drawImage();
        const width = document.documentElement.clientWidth
        const height = document.documentElement.clientHeight
        console.log(height)
        console.log(width);
//   const draw = () => {
    // this paints the sky
    ctx.fillStyle = `rgb(227, 254, 255)`;
    ctx.fillRect(0,0, width, height);
    //this paints the ground
    ctx.beginPath();
    ctx.rect(0, 140, width, 10);
    ctx.fillStyle = `rgb(130, 79, 43)`;
    ctx.fill();
    // ctx.rect(0,0, width, )
    // ctc.fillStyle = rgb(227, 254, 255);
    // ctx.fill();

    // ctx.fillStyle = rgb(130, 79, 43);
    // ctx.rect(0, height*0.90, width, height*0.10);
    
    // draw the blocks
    // for (var i = 0; i < grassXs.length; i++) {
    //     const img = new Image();
    //     img.src = '../images/grass.png';
    //     img.onload = () => {
    //     ctx.drawImage(img, this.x, this.y, 50, 50);
    //     };
    //     image(getImage("grass.jpg"), grassXs[i], height*0.85, 20, 20);
    //     // subtract one, so that they appear to move to left (hopper appears to move to right)
    //     grassXs[i] -= 1;
    //     // Now move the blocks over once they wrap around
    //     if (grassXs[i] <= -20) {
    //         grassXs[i] = width;
    //     }
    // }
    // draw()
});