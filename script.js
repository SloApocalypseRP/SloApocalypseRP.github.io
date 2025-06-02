const animatedSections = document.querySelectorAll("section");

const fadeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

animatedSections.forEach(section => {
  section.classList.add("hidden");
  fadeObserver.observe(section);
});

// Scroll to top gumb
const scrollTopBtn = document.createElement("button");
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.style.position = "fixed";
scrollTopBtn.style.bottom = "30px";
scrollTopBtn.style.right = "30px";
scrollTopBtn.style.padding = "0.75rem 1rem";
scrollTopBtn.style.fontSize = "1.25rem";
scrollTopBtn.style.border = "none";
scrollTopBtn.style.borderRadius = "8px";
scrollTopBtn.style.background = "#d9534f";
scrollTopBtn.style.color = "#fff";
scrollTopBtn.style.cursor = "pointer";
scrollTopBtn.style.display = "none";
scrollTopBtn.style.zIndex = "1000";
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

// Smooth scroll za navigacijo
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth"
      });
    }
  });
});

// Aktivni linki med scrollom
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("main section");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Parallax za hero ozadje
const hero = document.querySelector(".hero");
window.addEventListener("scroll", () => {
  const offset = window.scrollY;
  hero.style.backgroundPositionY = `${offset * 0.5}px`;
});
