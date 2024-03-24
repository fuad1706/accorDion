const drops = document.querySelectorAll(".drop");

drops.forEach((drop) => {
  drop.addEventListener("click", () => {
    drop.classList.toggle("active");
    if (drop.classList.contains("active")) {
      drop.querySelector(".plus").src = "../assets/images/icon-minus.svg";
    } else {
      drop.querySelector(".plus").src = "../assets/images/icon-plus.svg";
    }
  });
});
