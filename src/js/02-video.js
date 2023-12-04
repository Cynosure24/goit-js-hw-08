import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// import { values } from '@vimeo/player';



const vimeoFrame = document.querySelector("#vimeo-player");

const player = new Player(vimeoFrame)


const playFrame = throttle(function (data) {
        localStorage.setItem("videoplayer-current-time", data.seconds)
}, 1000)

player.on("timeupdate", playFrame)


const currentTime = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime(currentTime || 0);