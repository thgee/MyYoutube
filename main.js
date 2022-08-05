const moreBtn = document.querySelector(".info .metadata .moreBtn");
const title = document.querySelector(".info .metadata .title");
const dayNightBtn = document.querySelector(".dayNightBtn");
const body = document.querySelector("body");
const text = document.querySelectorAll("span");

function dayNightHandler(self) {
  if (self.value === "night") {
    body.style.color = "red";
    self.value = "day";
    for (let i = 0; i < text.length; i++) {
      text[i].style.color = "green";
    }
  } else {
    body.style.color = "white";
    self.value = "night";
    for (let i = 0; i < text.length; i++) {
      text[i].style.color = "white";
    }
  }
}

moreBtn.addEventListener("click", () => {
  moreBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
});

dayNightBtn.addEventListener("click", function () {
  dayNightHandler(this);
});
