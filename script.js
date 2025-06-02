// Fade-in animacija za vsako sekcijo ob scrollu
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1
  }
);

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(20px)";
  observer.observe(section);
});

// Gladko pomikanje pri kliku na navigacijske povezave
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth"
      });
    }
  });
});

// Hover efekt na naslovih sekcij
document.querySelectorAll("section h2").forEach(h2 => {
  h2.addEventListener("mouseover", () => {
    h2.style.transform = "scale(1.05)";
    h2.style.transition = "transform 0.3s ease";
  });
  h2.addEventListener("mouseout", () => {
    h2.style.transform = "scale(1)";
  });
});
