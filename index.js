// Friend toggle
var istatus = document.querySelector("#card h2");
var btn = document.querySelector("#add");

var check = 0;
btn.addEventListener("click", function () {
  if (check === 0) {
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
    btn.innerHTML = "Remove Friend";
    check = 1;
  } else {
    istatus.innerHTML = "Stranger";
    istatus.style.color = "red";
    btn.innerHTML = "Add Friend";
    check = 0;
  }
});

// Double-click heart animation
var card = document.querySelector("#card");
var heart = document.querySelector("#card i");

card.addEventListener("dblclick", function () {
  // Show heart
  heart.style.transform = "translate(-50%, -50%) scale(2)";
  heart.style.opacity = "1";

  // Hide after 500ms
  setTimeout(() => {
    heart.style.transform = "translate(-50%, -50%) scale(0.7)";
    heart.style.opacity = "0";
  }, 500);
});

// Custom cursor movement
var cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function (e) {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// select all elem rows
document.querySelectorAll(".elem").forEach((elem) => {
  let img = elem.querySelector("img");

  // move image with mouse
  elem.addEventListener("mousemove", (event) => {
    img.style.left = event.offsetX + "px";
    img.style.top = event.offsetY + "px";
  });

  // show image on hover
  elem.addEventListener("mouseenter", () => {
    img.style.opacity = 1;
  });

  // hide image when leaving
  elem.addEventListener("mouseleave", () => {
    img.style.opacity = 0;
  });
});

const storyElements = document.querySelectorAll(".story img");
const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewerImg");
const closeBtn = document.getElementById("closeBtn");

// Click on story → open viewer with that photo
storyElements.forEach((story) => {
  story.addEventListener("click", () => {
    viewerImg.src = story.src;
    viewer.style.display = "flex";
  });
});

// Close viewer
closeBtn.addEventListener("click", () => {
  viewer.style.display = "none";
});
