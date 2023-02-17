export default class MediaPlayer {
  constructor(config) {
    this.media = config.el;
  }

  togglePlay() {
    this.media.paused
      ? this.media.play()
      : this.media.play
      ? this.media.pause()
      : null;
  }
}
