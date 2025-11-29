document.querySelectorAll(".navbar-nav a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor link behavior
    const targetElement = document.querySelector(this.getAttribute("href")); // Find the target element
    if (targetElement) {
      // Calculate the scroll position, accounting for the navbar height
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      const targetPosition = targetElement.offsetTop - navbarHeight;
      // Smooth scroll to the target position
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      // Close the navbar if it's in small screen
      if (window.innerWidth < 990) {
        const navbarCollapse = document.getElementById("navbarNavAltMarkup");
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: true,
        }).hide(); // Close the navbar
      }
    }
  });
});

const typing = ()=> {
  const selectTyped = document.querySelector(".typed");
  const typeArray = [
    "WebDeveloper",
    "UI/UX Designer",
    "Game Developer",
    "Freelancer",
  ];
  if (selectTyped) {
    new Typed(".typed", {
      strings: typeArray,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }
};
document.addEventListener("DOMContentLoaded", typing);

document.addEventListener("scroll", (event) => {
    const home = document.getElementById("home");
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }
});

const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if (isDarkMode) {
  console.log("Dark mode is preferred.");
  // Apply dark mode styles or logic
} else {
  console.log("Light mode is preferred or no preference set.");
  // Apply light mode styles or logic
}
