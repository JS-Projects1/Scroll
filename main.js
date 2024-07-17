// Start Section Three
const sectionThree = document.querySelector(".three");
const spansThree = document.querySelectorAll(".progress span");

window.onscroll = function () {
    // Section Three
    if (window.scrollY >= sectionThree.offsetTop) {
      console.log("scroll");
      spansThree.forEach((span) => {
        span.style.width = span.dataset.width;
      });
    }
    // Section Four
    if (window.scrollY >= sectionFour.offsetTop) {
      spansFour.forEach((num) => startCount(num));
    }
  };

// Start Section Four
let sectionFour = document.querySelector(".four");
let spansFour = document.querySelectorAll(".nums .num");

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
