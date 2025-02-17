window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);

function handleScroll() {
  /* const logo = document.getElementById("logo"); */
  const logo = document.querySelector("#logo img");
  const logoBottom = logo.getBoundingClientRect().bottom;
  const navbarLogo = document.getElementById("navbar-logo");

  if (logoBottom < 0) {
    document.body.classList.add("shrink");
    navbarLogo.style.opacity = "1";
    logo.style.opacity = "0";
  } else {
    document.body.classList.remove("shrink");
    navbarLogo.style.opacity = "0";
    logo.style.opacity = "1";
  }
}

document.getElementById("benefits-cards-container").onmousemove = (e) => {
  for (const card of document.getElementsByClassName("benefits-card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } /* else {
      entry.target.classList.remove("show");
    } */
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
const hiddenOddElements = document.querySelectorAll(".hidden-odd");
hiddenElements.forEach((el) => observer.observe(el));
hiddenOddElements.forEach((el) => observer.observe(el));
