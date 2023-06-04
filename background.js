const images = [
    "background-1.PNG",
    "background-2.PNG",
    "background-3.JPG"
];

const ChosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = ChosenImage;

document.body.appendChild(bgImage);