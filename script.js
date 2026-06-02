const square = document.querySelector("#square");

const animation = square.animate(
  [{ transform: "translatey(0px)" }, { transform: "translatey(100px)" }],
  {
    duration: 2000, // makes animation lasts 2 seconds
    iterations: Infinity, // loops indefinitely
    direction: "alternate", // moves back and forth
    easing: "ease-in-out", // smooth easing
  },
);
