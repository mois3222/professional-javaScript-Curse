import MediaPlayer from "./MediaPlayer.js";

const d = document,
  $video = d.querySelector("video"),
  $button = d.querySelector("button");

const player = new MediaPlayer({ el: $video });

$button.onclick = () => player.togglePlay();

/*       $video.play();
 */
