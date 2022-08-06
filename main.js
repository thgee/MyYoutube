const root = document.querySelector(":root");
const moreBtn = document.querySelector(".info .metadata .moreBtn");
const title = document.querySelector(".info .metadata .title");
const dayNightBtn = document.querySelector(".dayNightBtn");

function getCssValiable(valiable_name) {
  return getComputedStyle(document.documentElement).getPropertyValue(
    valiable_name
  );
}

let Color = {
  background_color: getCssValiable("--background-color"),
  text_color: getCssValiable("--text-color"),
  dark_grey_color: getCssValiable("--dark-grey-color"),
  blue_color: getCssValiable("--blue-color"),
};

function dayNightHandler(self) {
  if (self.value) {
    // css의 :root 안에 있는 변수값 변경
    root.style.setProperty("--background-color", "white");
    root.style.setProperty("--text-color", "black");
    root.style.setProperty("--dark-grey-color", "black");
    document.querySelector("body").style.fontWeight = "bold";
  } else {
    root.style.setProperty("--background-color", Color.background_color);
    root.style.setProperty("--text-color", Color.text_color);
    root.style.setProperty("--dark-grey-color", Color.dark_grey_color);
    document.querySelector("body").style.fontWeight = "normal";
  }
}

moreBtn.addEventListener("click", () => {
  moreBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
});

dayNightBtn.addEventListener("click", function () {
  dayNightBtn.classList.toggle("clicked");
  dayNightHandler(document.querySelector(".clicked"));
});
