const images = ["bg-1.jpg", "bg-2.jpg", "bg-3.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`
bgImage.className = "bg"

document.body.prepend(bgImage);