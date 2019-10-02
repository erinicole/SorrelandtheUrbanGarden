class Character {
  constructor(options) {
    this.x = options.x;
    this.y = options.y;
    this.img = "../images/girl.png";
    this.ctx = options.ctx;
  }

  drawImage() {
    // image(this.img, this.x, this.y, 40, 40);
    const img = new Image();
    img.src = this.img;
    img.onload = () => {
      ctx.drawImage(img, this.x, this.y, 40, 40);
    };
  }

  //   move() {
  //     this.vel = this.game.bounceBack(this.pos, this.vel);
  //     this.pos[0] += this.vel[0];
  //     this.pos[1] += this.vel[1];
  //   }
}
export default Character;
