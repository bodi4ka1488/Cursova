const video = document.querySelector("video");
const audio = document.querySelector("audio");

// Додати подію для відтворення аудіо та відео
video.addEventListener("play", function () {
  alert("Приємного перегляду");
});
