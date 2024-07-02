const images = [
  "../images/gallery-1.jpg",
  "../images/gallery-2.jpg",
  "../images/gallery-3.jpg",
  "../images/gallery-4.jpg",
];

const divElements = document.querySelectorAll(".infoFoto > div");

divElements.forEach((element, index) => {
  element.style.background = `url(${images[index]})`;
  element.style.backgroundSize = "cover";
  element.style.backgroundPosition = "center";
});
