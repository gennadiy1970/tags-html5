const playBtn = document.querySelector(".play");
const videoElement = document.querySelector("video");
playBtn.addEventListener("click", playVideo);

function playVideo(event) {
  // playBtn.style.opacity = 0;
  playBtn.style.left = "-10000px";
  // playBtn.style.cursor = "none";
  const delay = setTimeout(function () {
    videoElement.play();
  }, 500)
}

function pauseVideo(event) {
  videoElement.pause();
  playBtn.style.opacity = 1;
  playBtn.style.cursor = "pointer";
}
