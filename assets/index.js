import MediaPlayer from "./MediaPlayer.js"; //Mediaplayes is a dependency that it manipulates the DOM elements specifically multimedia elements like video, audio, etc.
import Autoplay from "../plugins/Autoplay.js"; //Autoplay is a plugin that let the web-site player video automatically.

const d = document,
  $video = d.querySelector("video"),
  $button = d.querySelector("button");

const player = new MediaPlayer({ el: $video, plugins: [new Autoplay()] });

$button.onclick = () => player.togglePlay();
// player._initplugins();
