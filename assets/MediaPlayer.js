export default class MediaPlayer {
  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
  }

  _initplugins() {
    this.plugins.forEach((element) => {
      element.run(this);
    });
  }

  togglePlay() {
    this.media.paused
      ? this.media.play()
      : this.media.play
      ? this.media.pause()
      : null;
  }
}
