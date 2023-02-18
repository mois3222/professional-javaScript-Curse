export default class Autoplay {
  constructor(player) {
    this.player = player;
  }

  run(player) {
    /* this.player.muted = true;
    this.player.play(); */
    player.media.muted = true;
    player.media.play();
  }
}
