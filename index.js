let progress = document.querySelector(".progress");
let progress__circles = document.querySelectorAll(".progress__circles");
let progress__line = document.querySelector(".progress__line");
let btNext = document.querySelector(".next");
let btprev = document.querySelector(".prev");

let index = 1;
btNext.addEventListener("click", () => {
  index++;
  if (index >= progress__circles.length) {
    index = progress__circles.length;
  }
  update();
});

btprev.addEventListener("click", () => {
  index--;
  if (index <= 1 || index === 1) {
    index = 1;
  }
  update();
});
const update = () => {
  progress__circles.forEach((circle, idx) => {
    if (idx < index) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  let actives = document.querySelectorAll(".active");
  console.log(actives.length);
  progress__line.style.width =
    ((actives.length - 1) / (progress__circles.length - 1)) * 100 + "%";
  if (index === 1) {
    btprev.disabled = true;
  } else if (index === progress__circles.length) {
    btNext.disabled = true;
  } else {
    btprev.disabled = false;
    btNext.disabled = false;
  }
};
