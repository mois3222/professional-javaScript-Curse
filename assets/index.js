const d = document,
  $video = d.querySelector("video"),
  $button = d.querySelector("button");

class MediaPlayer {
  constructor(config) {
    this.media = config.el;
  }

  playOrPause() {
    this.media.paused
      ? this.media.play()
      : this.media.play
      ? this.media.pause()
      : null;
  }
}
const player = new MediaPlayer({ el: $video });

$button.onclick = () => player.playOrPause();

/*       $video.play();
 */
